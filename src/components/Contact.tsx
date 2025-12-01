import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  text-align: center;
  padding: 40px 20px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 12px;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 30px;
`;

const ContactPerson = styled.div`
  margin-bottom: 25px;
  
  p {
    margin: 5px 0;
    font-size: 1.2rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;

const Button = styled.a`
  display: inline-block;
  padding: 10px 20px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  text-decoration: none;
  font-size: 1rem;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;

const Contact = () => {
  return (
    <Section>
      <SectionTitle>마음 전하실 곳</SectionTitle>
      <ContactPerson>
        <p>신랑 OOO</p>
        <ButtonContainer>
          <Button href="tel:010-1234-5678">전화걸기</Button>
          <Button href="sms:010-1234-5678">문자보내기</Button>
        </ButtonContainer>
      </ContactPerson>
      <ContactPerson>
        <p>신부 OOO</p>
        <ButtonContainer>
          <Button href="tel:010-9876-5432">전화걸기</Button>
          <Button href="sms:010-9876-5432">문자보내기</Button>
        </ButtonContainer>
      </ContactPerson>
    </Section>
  );
};

export default Contact;
