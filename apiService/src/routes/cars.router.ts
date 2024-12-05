import * as  express from 'express';
import { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/database.service";
import * as fs from 'fs';
import { CarData } from "../models/car";
export const carsRouter = express.Router();

import multer from 'multer';

import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: 'dxugybfqn',
  api_key: '433682319898571',
  api_secret: 'wSCEHETlGre52RCI-JHgCA03SQY',
});
export const uploadOnCloudinary = async (filePathOrUrl) => {
  try {
     console.log({ filePathOrUrl });
     if (!filePathOrUrl) return null;
 
     const isUrl: string = filePathOrUrl.startsWith('http://') || filePathOrUrl.startsWith('https://');
 
     let response;
     if (isUrl) {
       response = await cloudinary.uploader.upload(filePathOrUrl, {
         resource_type: "image",
       });
     } else {
       response = await cloudinary.uploader.upload(filePathOrUrl, {
         resource_type: "auto",
       });
       fs.unlinkSync(filePathOrUrl);
     }
 
     console.log("file is uploaded on Cloudinary ", response.url);
     return response;
  } catch (error) {
     console.error(`Error uploading to Cloudinary: ${error}`);
     
     return null;
  }
 };
 

carsRouter.use(express.json());

(async () => {
  await collections?.carData?.createIndex({ brand: 1 });
  await collections?.carData?.createIndex({ category: 1 });
  await collections?.carData?.createIndex({ _id: 1 });
})();


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/') 
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname) 
  }
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.fieldname === 'image') {
      cb(null, true);
    } else {
      cb(new Error('Unexpected field'));
    }
  }
});

carsRouter.post('/createNewCar', upload.single('image'), async (req: Request, res: Response) => {
  try {
    const carData = req.body as CarData;
    const carImagePath = req.file?.path || req.body.image;

    console.log({ carImagePath })

    if (!carImagePath) {
      return res.status(400).send({ status: 400, message: 'Image file is required.' });
    }

    const cloudinaryResponse = await uploadOnCloudinary(carImagePath);

    carData.externalImage = [cloudinaryResponse.url]; 
    const result = await collections?.carData?.insertOne(carData);
    const Responsedata = await collections?.carData?.findOne({ _id: result.insertedId });

    if (result) {
      return res.status(201).send({ status: 201, message: 'createNewCar successfully.'  , data: Responsedata });
    } else {
      throw new Error('Failed to add car data.');
    }
  } catch (error) {
    console.error(error);
    return res.status(400).send((error as Error).message);
  }
});
carsRouter.get('/getAllCars', async (req: Request, res: Response) => {
  try {
    const pageSize = 60; 
    const pageNumber = parseInt(req.query.pageNumber as string, 10) || 1;
    const skip = (pageNumber - 1) * pageSize;

    const brand = req.query.brand as string;
    const category = req.query.category as string;

    const query: { brand?: string; category?: string } = {};
    if (brand) {
      query.brand = brand;
    }
    if (category) {
      query.category = category;
    }

    console.log("pageNumber:", pageNumber);
    console.log("brand:", brand);
    console.log("category:", category);

    const timeoutMs = 500000;
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error('MongoDB query timed out.'));
      }, timeoutMs);
    });

    const resultPromise = collections?.carData
      ?.find(query)
      .skip(skip)
      .limit(pageSize)
      .toArray();

    const result = await Promise.race([timeoutPromise, resultPromise]);

    if (result) {
      return res.status(200).send({ data: result, message: "get all cars" }); // eslint-disable-line 
    } else {
      return res.status(500).send({ status: 500, message: 'Failed to fetch car data.' });
    }
  } catch (error) {
    console.error(error);
    console.error("Database error:", error);
    return res.status(400).send((error as Error).message);
  }
});

carsRouter.patch('/updateCar/:id', async (req: Request, res: Response) => {
  try {
     const carData = req.body as CarData;
     console.log(req.params.id);
     if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).send({ status: 400, message: 'Invalid ID format.' });
     }
     const objectId = new ObjectId(req.params.id);
     console.log(`ID from request: ${req.params.id}`);
      
     const result = await collections?.carData?.updateOne({ _id: objectId }, { $set: carData });
 
     if (result?.modifiedCount > 0) {
       return res.status(200).send({ status: 200, message: `Car updated successfully with id ${req.params.id}` });
     } else {
       return res.status(404).send({ status: 404, message: `Car with id ${req.params.id} not found` });
     }
  } catch (error) {
    if (error instanceof Error && error.name === 'CastError') {
       return res.status(400).send({ status: 400, message: 'Invalid ID format.' });
    }
    console.error(error);
    return res.status(500).send({ status: 500, message: "Internal Server Error" });
   }
   
 });
 
 carsRouter.patch('/updateCarImage/:id', upload.single('image'), async (req: Request, res: Response) => {
  try {
     const carData = req.body as CarData;
     const objectId = new ObjectId(req.params.id); // Use req.params.id instead of req.body.id
     const carImagePath = req.file?.path;
 
     if (carImagePath) {
       const cloudinaryResponse = await uploadOnCloudinary(carImagePath);
       carData.externalImage = [cloudinaryResponse.url]; // Assuming externalImage is an array
     }
 
     // Update car data in the database
     const result = await collections?.carData?.updateOne({ _id: objectId }, { $set: carData });
 
     if (result?.modifiedCount > 0) {
       return res.status(200).send({ status: 200, message: `Car updated successfully with id ${req.params.id}` });
     } else {
       return res.status(404).send({ status: 404, message: `Car with id ${req.params.id} not found` });
     }
  } catch (error) {
     console.error(error);
     return res.status(500).send({ status: 500, message: "Internal Server Error" });
  }
 });
 
carsRouter.get('/getCar/:id', async (req: Request, res: Response) => {
  try {
    console.log(req.params.id); 
    const objectId = new ObjectId(req.params.id); 
    console.log(objectId); 

    const result = await collections?.carData?.findOne({ _id: objectId })
    if (result) {
      return res.status(201).send({ status: 201, message: "getCar sucessfully", data: result })
    }
    else {
      return res.status(400).send({ status: 201, message: "No data found", data: result })

    }
  } catch (error) {
    console.error(error);
    return res.status(500).send({ status: 500, message: "Internal server Error" });
  }

});


carsRouter.delete('/deleteCar/:id', async (req: Request, res: Response) => {
  try {
    const objectId = new ObjectId(req.params.id); 
    const result = await collections?.carData?.deleteOne({ _id: objectId });

    if (result?.deletedCount > 0) {
      return res.status(201).send({ status: 201, message: `Car deleted successfully with id ${req.params.id}` });
    } else {
      return res.status(404).send({ status: 404, message: `Car with id ${req.params.id} not found` });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send({ status: 500, message: "Internal Server Error" });
  }
});




carsRouter.get("/dashBoard", async (req: Request, res: Response) => {

  const cars = await collections?.carData?.countDocuments()
  const Categoryes = await collections?.carCategory?.countDocuments()
  const brands = await collections?.carBrands?.countDocuments()
  const enquiryes = await collections?.carInquiry?.countDocuments()
  const contactInquires = await collections?.users?.countDocuments()
  const location = await collections?.addCarLoaction?.countDocuments()
  const result = {
    totalCars: cars,
    totalCategoryes: Categoryes,
    totalBrands: brands,
    totalEnquiryes: enquiryes,
    totalContactInquires: contactInquires,
    totalLocation: location
  }

  if (result) {
    return res.status(200).send({ status: 200, message: "getdashBoard sucessfully", data: result }
    )
  }
  else {
    return res.status(400).send({ status: 400, message: " getdashBoard data is not avaible", data: {} })
  }

})



export default carsRouter;