import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  Description,
  Heading,
  Para,
  Person,
  BtnWrapper,
  BtnLink,
  ContentWrapper,
  ContentWrapper2,
} from "../Hero/Hero.styled";

const Start = () => {
  return (
    <>
      <BrowserRouter>
        <Description>
          <ContentWrapper>
            <Heading>More than just shorter links</Heading>
            <Para>
              Build your brand's recognition and get detailed insights on how
              your links are performing.
            </Para>
            <BtnWrapper>
              <BtnLink to="Signup">Get Started</BtnLink>
            </BtnWrapper>
          </ContentWrapper>
          <ContentWrapper2>
            <Person>
              <img
                src={process.env.PUBLIC_URL + "assets/illustration-working.svg"}
                alt="working-person"
              />
            </Person>
          </ContentWrapper2>
        </Description>
      </BrowserRouter>
    </>
  );
};

export default Start;
