import express from 'express';
import multer from 'multer';
import * as path from 'path';
import * as fs from 'fs';
export const bannersRouter = express.Router();

bannersRouter.use(express.json());

// Multer configuration for handling file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = path.join(__dirname, '../public/banners');
        fs.mkdirSync(uploadPath, { recursive: true }); // Ensure the upload directory exists
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname); // Use the original filename
    }
});

const upload = multer({ storage: storage });


bannersRouter.post('/upload', upload, (req, res) => {
  // Handle the uploaded files
  const files: Express.Multer.File[] = req.files as Express.Multer.File[];


  // Process and store the files as required
  // For example, save the files to a specific directory using fs module
  files?.forEach((file) => {
    const filePath = `uploads/${file.filename}`;
    fs.rename(file.path, filePath, (err) => {
      if (err) {
        // Handle error appropriately and send an error response
        return res.status(500).json({ error: 'Failed to store the file' });
      }
    });
  });

  // Send an appropriate response to the client
  res.status(200).json({ message: 'File upload successful' });
});

// // Create a new banner with multiple images
// bannersRouter.post('/addBanner', upload.array('bannerImages'), async (req: Request, res: Response) => {
//     try {
//         const { title, description } = req.body;
        
//         // Extract uploaded files
//         const imagePaths: string[] = req.files.map((file: Express.Multer.File) => file.path);

//         // Save banner details to the database
//         const result = await collections?.banners?.insertOne({ title, description, imagePaths });

//         if (result) {
//             return res.status(200).send({ status: 200, message: 'Banner added successfully' });
//         } else {
//             return res.status(500).send({ status: 500, message: 'Failed to add banner' });
//         }
//     } catch (error) {
//         console.error(error);
//         return res.status(400).send({ status: 400, message: error.message });
//     }
// });


// // Get all banners
// bannersRouter.get('/getAllBanners', async (req: Request, res: Response) => {
//     try {
//         const banners = await collections?.banners?.find({}).toArray();
//         return res.status(200).send({ status: 200, message: 'Banners retrieved successfully', data: banners });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).send({ status: 500, message: 'Failed to retrieve banners' });
//     }
// });

// // Get banner by ID
// bannersRouter.get('/getBanner/:id', async (req: Request, res: Response) => {
//     try {
//         const banner = await collections?.banners?.findOne({ _id: req.params.id });
//         if (banner) {
//             return res.status(200).send({ status: 200, message: 'Banner retrieved successfully', data: banner });
//         } else {
//             return res.status(404).send({ status: 404, message: 'Banner not found' });
//         }
//     } catch (error) {
//         console.error(error);
//         return res.status(500).send({ status: 500, message: 'Failed to retrieve banner' });
//     }
// });

// // Update banner by ID
// bannersRouter.put('/updateBanner/:id', async (req: Request, res: Response) => {
//     try {
//         const { title, description } = req.body;
//         const result = await collections?.banners?.updateOne(
//             { _id: req.params.id },
//             { $set: { title, description } }
//         );
//         if (result.modifiedCount !== 0) {
//             return res.status(200).send({ status: 200, message: 'Banner updated successfully' });
//         } else {
//             return res.status(404).send({ status: 404, message: 'Banner not found or no changes made' });
//         }
//     } catch (error) {
//         console.error(error);
//         return res.status(500).send({ status: 500, message: 'Failed to update banner' });
//     }
// });

// // Delete banner by ID
// bannersRouter.delete('/deleteBanner/:id', async (req: Request, res: Response) => {
//     try {
//         const result = await collections?.banners?.deleteOne({ _id: req.params.id });
//         if (result.deletedCount !== 0) {
//             return res.status(200).send({ status: 200, message: 'Banner deleted successfully' });
//         } else {
//             return res.status(404).send({ status: 404, message: 'Banner not found' });
//         }
//     } catch (error) {
//         console.error(error);
//         return res.status(500).send({ status: 500, message: 'Failed to delete banner' });
//     }
// });
