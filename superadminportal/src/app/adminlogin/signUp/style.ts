import styled from 'styled-components';



export const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const SignUpForm = styled.form`
  width: 300px;
  padding: 20px;
  border-radius: 8px;
  background-color: #f0f0f0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const FormTitle = styled.h2`
  margin-bottom: 20px;
  text-align: center;
  color: #007bff;
`;

export const FormInput = styled.input`
  width: 100%;
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const FormButton = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ErrorText = styled.span`
  color: red;
`;

