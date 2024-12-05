import * as yup from 'yup';

const validationSchema = selectedLanguage => {
  const errorMessages = {
    en: {
      name: 'Name is required',
      phoneNumber: 'Phone Number is required',
      email: {
        required: 'Email is required',
        format: 'Invalid email',
      },
      pickUpLoc: 'Pick Up Location is required',
      dropLocation: 'Drop Location is required',
      startDate: 'Pick Up Date is required',
      endDate: 'Pick Off Date is required',
      message: 'Please Enter Message',
    },
    ar: {
      name: 'الاسم مطلوب',
      phoneNumber: 'رقم الهاتف مطلوب',
      email: {
        required: 'البريد الإلكتروني مطلوب',
        format: 'بريد إلكتروني غير صالح',
      },
      pickUpLoc: 'مكان الاستلام مطلوب',
      dropLocation: 'مكان الوصول مطلوب',
      startDate: 'تاريخ الاستلام مطلوب',
      endDate: 'تاريخ التسليم مطلوب',
      message: 'الرجاء إدخال الرسالة',
    },
  };

  const selectedErrorMessages =
    errorMessages[selectedLanguage] || errorMessages.en;

  return yup.object().shape({
    name: yup.string().required(selectedErrorMessages.name),
    phoneNumber: yup.string().required(selectedErrorMessages.phoneNumber),
    email: yup
      .string()
      .email(selectedErrorMessages.email.format)
      .required(selectedErrorMessages.email.required),
    pickUpLoc: yup.string().required(selectedErrorMessages.pickUpLoc),
    dropLocation: yup.string().required(selectedErrorMessages.dropLocation),
    startDate: yup.date().required(selectedErrorMessages.startDate),
    endDate: yup.date().required(selectedErrorMessages.endDate),
    message: yup.string().required(selectedErrorMessages.message),
  });
};

export default validationSchema;
