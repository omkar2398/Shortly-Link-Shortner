import styled from "styled-components";

export const Layout = styled.div`
  background-color: #fff1f0;
  padding: 3rem;
`;

export const Heading = styled.h1`
  width: 100%;
  margin: 2rem 0;
  text-align: center;
  @media screen and (max-width: 980px) {
    width: 100%;
    margin: 0.2rem;
    font-size: 2rem;
  }
`;

export const Para = styled.p`
  width: 35%;
  margin: 0 auto;
  text-align: center;
  color: #9e9aa7;
  font-weight: bold;
  line-height: 1.5rem;
  @media screen and (max-width: 980px) {
    display: block;
    width: 100%;
    padding: 1rem 0;
    text-align: center;
    font-weight: bold;
  }
`;

export const Div = styled.div`
  display: flex;
  position: relative;
  width: 80%;
  margin: 3rem auto;

  @media screen and (max-width: 980px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 2rem auto;
    padding: 0;
  }
`;

export const Modal1 = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #fff;
  margin: 2rem auto;
  padding: 2rem;
  width: 20%;
  @media screen and (max-width: 980px) {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 1rem auto;
    padding: 2rem;
  }
`;

export const Modal2 = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 2rem;
  background-color: #fff;
  margin: 2rem auto;
  padding: 2rem;
  width: 20%;
  @media screen and (max-width: 980px) {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 1rem auto;
    padding: 2rem;
  }
`;

export const Modal3 = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 4rem;
  background-color: #fff;
  margin: 2rem auto;
  padding: 2rem;
  width: 20%;
  @media screen and (max-width: 980px) {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 1rem auto;
    padding: 2rem;
  }
`;

export const Heading1 = styled.h3`
  @media screen and (max-width: 980px) {
    text-align: center;
  }
`;

export const Para1 = styled.p`
  color: #9e9aa7;
  font-weight: bold;

  @media screen and (max-width: 980px) {
    text-align: center;
  }
`;

export const Heading2 = styled.h3`
  @media screen and (max-width: 980px) {
    text-align: center;
  }
`;

export const Para2 = styled.p`
  color: #9e9aa7;
  font-weight: bold;

  @media screen and (max-width: 980px) {
    text-align: center;
  }
`;

export const Heading3 = styled.h3`
  @media screen and (max-width: 980px) {
    text-align: center;
  }
`;

export const Para3 = styled.p`
  color: #9e9aa7;
  font-weight: bold;

  @media screen and (max-width: 980px) {
    text-align: center;
  }
`;

export const Circle = styled.div`
  & > img {
    height: 2rem;
    position: absolute;
    top: -10%;
    padding: 1rem;
    border-radius: 50%;
    background-color: #3b3054;

    @media screen and (max-width: 980px) {
      left: 40%;
    }
  }
`;
