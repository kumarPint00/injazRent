import * as yup from 'yup';

const validationLoginSchema = selectedLanguage => {
  const errorMessages = {
    en: {
      email: {
        required: 'Email is required',
        format: 'Enter a valid email',
      },
      password: {
        required: 'Password is required',
        format: 'Enter a valid password with at least 8 characters',
      },
    },
    ar: {
      email: {
        required: 'البريد الإلكتروني مطلوب',
        format: 'أدخل عنوان بريد إلكتروني صالح',
      },
      password: {
        required: 'كلمة المرور مطلوبة',
        format: 'أدخل كلمة مرور صالحة مع الأقل 8 أحرف',
      },
    },
  };

  const selectedErrorMessages =
    errorMessages[selectedLanguage] || errorMessages.en;

  return yup.object().shape({
    email: yup
      .string()
      .email(selectedErrorMessages.email.format)
      .required(selectedErrorMessages.email.required),

    password: yup
      .string()
      .test(
        'password',
        selectedErrorMessages.password.format,
        value => value && value.length >= 8,
      )
      .required(selectedErrorMessages.password.required),
  });
};

export default validationLoginSchema;
