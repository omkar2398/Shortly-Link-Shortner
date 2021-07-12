import styled from "styled-components";

export const Form = styled.div`
  position: relative;
  width: 80%;
  margin: 2rem auto;
  & > img {
    width: 100%;
    background-color: #3b3054;
  }

  @media screen and (max-width: 980px) {
    position: relative;
    display: block;
    height: 100%;
    width: 80%;
    margin: 1rem auto;
    & > img {
      width: 100%;
      height: 200px;
      margin: 0 auto;
      border-radius: 10px;
    }
  }
`;

export const Layout = styled.div`
  display: flex;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (max-width: 980px) {
    display: block;
    width: 100%;
    height: auto;
  }
`;

export const SearchBar = styled.input`
  width: 100%;
  margin: auto 1rem;
  padding: 1.5rem;
  border-radius: 10px;
  border: none;
  font-size: 18px;

  @media screen and (max-width: 980px) {
    display: block;
    width: 70%;
    margin: 1rem auto;
    border-radius: 0;
  }
`;

export const Button = styled.button`
  width: 30%;
  margin: auto 1rem;
  padding: 1.5rem;
  background-color: #2acfcf;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 10px;

  @media screen and (max-width: 980px) {
    display: block;
    width: 85%;
    margin: 1rem auto;
    border-radius: 0;
  }
`;

export const LinkList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background-color: #fff;
  width: 70vw;

  @media screen and (max-width: 980px) {
    display: block;
    width: 70%;
    margin: 10rem auto;
  }
`;

export const CopyBtn = styled.button`
  width: 10%;
  margin: auto 1rem;
  padding: 1rem;
  background-color: #2acfcf;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 10px;

  @media screen and (max-width: 980px) {
    display: block;
    width: 70%;
    margin: 1rem auto;
  }
`;

export const Paragraph = styled.p`
  width: 100%;
  color: #2acfcf;
  font-weight: bold;

  @media screen and (max-width: 980px) {
    display: block;
    width: 70vw;
    margin: 1rem 0;
    color: #2acfcf;
    font-weight: bold;
  }
`;
