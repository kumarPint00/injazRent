'use client';
import React from 'react';
import styled, { keyframes } from 'styled-components';

const UnderProgressPage = () => {
  return (
    <Container>
      <Content>
        <Title>Under Progress</Title>
        <Message>
          We are currently working on your webpage. You will soon see the updates.
        </Message>
      </Content>
    </Container>
  );
};


const blink = keyframes`
  from, to {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`;
const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
`;

const Content = styled.div`
text-align: center;
animation: ${blink} 1s ease-in-out infinite alternate;
`;

const Title = styled.h2`
font-size: 24px;
margin-bottom: 20px;
`;

const Message = styled.p`
font-size: 16px;
`;

export default UnderProgressPage;
