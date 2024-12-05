import * as yup from 'yup';

const validationSignUpSchema = selectedLanguage => {
  const errorMessages = {
    en: {
      firstName: {
        required: 'First Name is required',
        format: 'Invalid first name',
      },
      lastName: {
        required: 'Last Name is required',
        format: 'Invalid last name',
      },
      email: {
        required: 'Email is required',
        format: 'Invalid email address',
      },
      password: {
        required: 'Password is required',
        format:
          'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character',
      },
      phoneNumber: {
        required: 'Phone Number is required',
      },
      address: {
        required: 'Address is required',
      },
      city: {
        required: 'City is required',
      },
      locality: {
        required: 'Locality is required',
      },
      area: {
        required: 'Area is required',
      },
      zipcode: {
        required: 'Zipcode is required',
      },
    },
    ar: {
      firstName: {
        required: 'الاسم الأول مطلوب',
        format: 'الاسم الأول غير صالح',
      },
      lastName: {
        required: 'اسم العائلة مطلوب',
        format: 'اسم العائلة غير صالح',
      },
      email: {
        required: 'البريد الإلكتروني مطلوب',
        format: 'عنوان البريد الإلكتروني غير صالح',
      },
      password: {
        required: 'كلمة المرور مطلوبة',
        format:
          'يجب أن تحتوي كلمة المرور على الأقل 8 أحرف، حرف كبير وحرف صغير ورقم وحرف خاص',
      },
      phoneNumber: {
        required: 'رقم الهاتف مطلوب',
      },
      address: {
        required: 'العنوان مطلوب',
      },
      city: {
        required: 'المدينة مطلوبة',
      },
      locality: {
        required: 'الحي مطلوب',
      },
      area: {
        required: 'المنطقة مطلوبة',
      },
      zipcode: {
        required: 'الرمز البريدي مطلوب',
      },
    },
  };

  const selectedErrorMessages =
    errorMessages[selectedLanguage] || errorMessages.en;

  return yup.object().shape({
    firstName: yup
      .string()
      .required(selectedErrorMessages.firstName.required)
      .matches(/^[A-Za-z]+$/, selectedErrorMessages.firstName.format),
    lastName: yup
      .string()
      .required(selectedErrorMessages.lastName.required)
      .matches(/^[A-Za-z]+$/, selectedErrorMessages.lastName.format),
    email: yup
      .string()
      .required(selectedErrorMessages.email.required)
      .matches(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        selectedErrorMessages.email.format,
      ),
    password: yup
      .string()
      .required(selectedErrorMessages.password.required)
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[a-zA-Z\d!@#$%^&*()_+]{8,}$/,
        selectedErrorMessages.password.format,
      ),
    phoneNumber: yup
      .string()
      .required(selectedErrorMessages.phoneNumber.required),
    address: yup.string().required(selectedErrorMessages.address.required),
    city: yup.string().required(selectedErrorMessages.city.required),
    locality: yup.string().required(selectedErrorMessages.locality.required),
    area: yup.string().required(selectedErrorMessages.area.required),
    zipcode: yup.string().required(selectedErrorMessages.zipcode.required),
  });
};

export default validationSignUpSchema;
