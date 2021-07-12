import styled from "styled-components";
import { Link } from "react-router-dom";

export const Description = styled.div`
  display: flex;
  align-items: center;
  margin: 3rem 0 0 auto;
  width: 90%;
  @media screen and (max-width: 980px) {
    display: flex;
    flex-direction: column;
    margin: auto;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 980px) {
    display: flex;
    order: 2;
  }
`;
export const ContentWrapper2 = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 980px) {
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
  @media screen and (max-width: 980px) {
    display: block;
    text-align: center;
    font-size: 3rem;
    width: 90vw;
    line-height: 3rem;
    letter-spacing: 0;
  }
`;

export const Para = styled.p`
  text-align: start;
  font-size: 18px;
  font-weight: bold;
  width: 70%;
  color: #9e9aa7;
  @media screen and (max-width: 980px) {
    font-size: 1.6rem;
    margin: 1rem 0;
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
  @media screen and (max-width: 980px) {
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

  & > img {
    height: 100%;
    width: 100%;
  }
  @media screen and (max-width: 980px) {
    & img {
      display: block;
      width: 90vw;
      margin: 0 0 0 1rem;
    }
  }
`;
