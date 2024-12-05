'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { SignInContainer, SignInForm, FormTitle, FormInput, FormButton, ErrorText } from './style';

const SignInPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data); // You can perform sign-in logic here
  };

  return (
    <SignInContainer>
      <SignInForm onSubmit={handleSubmit(onSubmit)}>
        <FormTitle>Sign In</FormTitle>
        <FormInput
          type="email"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        {errors.email && <ErrorText>Email is required</ErrorText>}
        <FormInput
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        {errors.password && <ErrorText>Password is required</ErrorText>}
        <FormButton type="submit">Sign In</FormButton>
      </SignInForm>
    </SignInContainer>
  );
};


export default SignInPage;
