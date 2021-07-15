import styled from "styled-components";

export const FooterContainer = styled.div`
  position: relative;
  background-color: #3b3054;

  & > img {
    width: 100%;
  }

  @media screen and (max-width: 980px) {
    display: block;
    & > img {
      width: 100%;
      height: 25vh;
      background-color: #3b3054;
    }
  }
`;

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  @media screen and (max-width: 980px) {
    display: block;
  }
`;

export const Head = styled.h1`
  width: 100%;
  color: #fff;
  @media screen and (max-width: 980px) {
    display: block;
  }
`;

export const Btn = styled.button`
  margin: 1rem auto;
  background-color: #2acfcf;
  color: #fff;
  font-weight: bold;
  padding: 1rem 3rem;
  text-align: center;
  border: none;
  border-radius: 2rem;
  @media screen and (max-width: 980px) {
    display: block;
  }
`;

export const MainFooter = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
  background-color: #000;
  @media screen and (max-width: 980px) {
    display: block;
  }
`;

export const Logo = styled.h2`
  width: 30%;
  display: flex;
  justify-content: center;
  color: #fff;
  @media screen and (max-width: 980px) {
    width: 100%;
    display: block;
    text-align: center;
  }
`;

export const FooterItems = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  color: #fff;

  @media screen and (max-width: 980px) {
    width: 100%;
    display: block;
    text-align: center;
  }
`;

export const FooterHead = styled.h3`
  color: #fff;
  @media screen and (max-width: 980px) {
  }
`;

export const FooterMenu1 = styled.ul`
  list-style: none;
  font-size: 12px;
  color: #9e9aa7;
  padding: 1rem;
  margin: 0;
  @media screen and (max-width: 980px) {
  }
`;
export const FooterMenu2 = styled.ul`
  list-style: none;
  font-size: 12px;
  color: #9e9aa7;
  padding: 1rem;
  margin: 0;
  @media screen and (max-width: 980px) {
  }
`;
export const FooterMenu3 = styled.ul`
  list-style: none;
  font-size: 12px;
  color: #9e9aa7;
  padding: 1rem;
  margin: 0;
  @media screen and (max-width: 980px) {
  }
`;

export const FooterList = styled.li`
  padding: 0.3rem;
  @media screen and (max-width: 980px) {
  }
`;

export const FooterLinks = styled.div`
  width: 30%;
  display: flex;
  padding: 1rem;
  margin: 0;
  @media screen and (max-width: 980px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const FaceBookLogo = styled.div`
  margin: 1rem;
  @media screen and (max-width: 980px) {
  }
`;
export const TwitterLogo = styled.div`
  margin: 1rem;
  @media screen and (max-width: 980px) {
  }
`;
export const PinterestLogo = styled.div`
  margin: 1rem;
  @media screen and (max-width: 980px) {
  }
`;
export const InstaLogo = styled.div`
  margin: 1rem;
  @media screen and (max-width: 980px) {
  }
`;
