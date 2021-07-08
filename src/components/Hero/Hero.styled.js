import styled from "styled-components";
import { Link } from "react-router-dom";

export const Description = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3rem;
  @media screen and (max-width: 375px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0 9rem;
  @media screen and (max-width: 375px) {
    display: flex;
    order: 2;
  }
`;
export const ContentWrapper2 = styled.div`
  display: flex;
  align-items: center;
  width: 50vw;
  @media screen and (max-width: 375px) {
    display: flex;
    height: fit-content;
    margin-bottom: 2rem;
    order: 1;
  }
`;

export const Heading = styled.h1`
  width: 30vw;
  text-align: start;
  color: #232127;
  font-size: 3.9rem;
  font-weight: bolder;
  line-height: 4rem;
  margin: 0;
  letter-spacing: -0.2rem;
  @media screen and (max-width: 375px) {
    display: block;
    text-align: center;
    margin: 1rem 0;
    font-size: 2.5rem;
    width: 90vw;
    line-height: 3rem;
    letter-spacing: 0;
  }
`;

export const Para = styled.p`
  text-align: start;
  font-size: 18px;
  white-space: wrap;
  margin: 0 0 1rem 0;
  color: #9e9aa7;
  margin: 0 1rem 0 0;
  @media screen and (max-width: 375px) {
    text-align: center;
    width: 90vw;
  }
`;

export const BtnWrapper = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  align-items: start;
  cursor: pointer;
  @media screen and (max-width: 375px) {
    align-items: center;
    padding-bottom: 22px;
  }
`;

export const BtnLink = styled(Link)`
  border-radius: 50px;
  color: white;
  background-color: #2acfcf;
  white-space: nowrap;
  padding: 0.7rem 2rem;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: #8affff;
  }
`;
export const Person = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-left: -6rem;
  @media screen and (max-width: 375px) {
    & img {
      display: block;
      width: 90vw;
      margin: 0 0 0 1rem;
    }
  }
`;
