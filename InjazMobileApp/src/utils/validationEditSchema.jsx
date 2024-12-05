import * as yup from 'yup';
import {useSelector} from 'react-redux';
import {selectLanguage} from '../../src/redux/slices/language_slices';

// Define the validation schema using yup
const validationEditSchema = selectedLanguage => {
  const enErrorMessages = {
    username: {
      required: 'Username is required',
      format: 'Username can only contain letters, numbers, and underscores',
    },
    email: {
      required: 'Email is required',
      format: 'Invalid email address',
    },
    phoneNumber: {
      required: 'Mobile number is required',
      format: 'Enter a valid mobile number with exactly 10 numeric characters',
    },
  };

  const arErrorMessages = {
    username: {
      required: 'اسم المستخدم مطلوب',
      format:
        'يمكن أن يحتوي اسم المستخدم فقط على الحروف والأرقام والشرطات السفلية',
    },
    email: {
      required: 'البريد الإلكتروني مطلوب',
      format: 'عنوان بريد إلكتروني غير صالح',
    },
    phoneNumber: {
      required: 'رقم الهاتف المحمول مطلوب',
      format: 'أدخل رقم هاتف محمول صالح يحتوي على 10 أرقام فقط',
    },
  };

  const errorMessages =
    selectedLanguage === 'en' ? enErrorMessages : arErrorMessages;

  return yup.object().shape({
    userName: yup
      .string()
      .matches(/^[A-Za-z0-9_]+$/, errorMessages.username.format)
      .required(errorMessages.username.required),
    email: yup
      .string()
      .matches(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        errorMessages.email.format,
      )
      .required(errorMessages.email.required),
    phoneNumber: yup
      .string()
      .matches(/^[0-9]{10}$/, errorMessages.phoneNumber.format)
      .required(errorMessages.phoneNumber.required),
  });
};

export default validationEditSchema;
