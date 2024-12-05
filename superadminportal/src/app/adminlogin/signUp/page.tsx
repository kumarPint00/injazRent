'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { SignUpContainer, SignUpForm, FormTitle, FormInput, FormButton, ErrorText } from './style';
const page = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data); // You can perform form submission here
  };

  return (
    <SignUpContainer>
      <SignUpForm onSubmit={handleSubmit(onSubmit)}>
        <FormTitle>
         Sign Up
        </FormTitle>
        <FormInput
          type="text"
          placeholder="First Name"
          {...register("firstName", { required: true })}
        />
        {errors.firstName && <ErrorText>First name is required</ErrorText>}
        <FormInput
          type="text"
          placeholder="Last Name"
          {...register("lastName", { required: true })}
        />
        {errors.lastName && <ErrorText>Last name is required</ErrorText>}
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
        <FormButton type="submit">Sign Up</FormButton>
      </SignUpForm>
    </SignUpContainer>
  );
};
export default page;
