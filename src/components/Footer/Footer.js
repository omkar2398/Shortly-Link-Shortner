import React from "react";

import {
  FooterContainer,
  Background,
  MainFooter,
  Btn,
  Head,
  Logo,
  FooterItems,
  FooterHead,
  FooterMenu1,
  FooterMenu2,
  FooterMenu3,
  FooterList,
  FooterLinks,
  FaceBookLogo,
  TwitterLogo,
  PinterestLogo,
  InstaLogo,
} from "./Footer.styled";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <Background>
          <img
            src={process.env.PUBLIC_URL + "assets/bg-boost-desktop.svg"}
            alt="bg-boost"
          />
        </Background>
        <Head>Boost your links today</Head>
        <Btn>Get Started</Btn>
      </FooterContainer>
      <MainFooter>
        <Logo>Shortly</Logo>
        <FooterItems>
          <FooterMenu1>
            <FooterHead>Features</FooterHead>
            <FooterList>Link Shortning</FooterList>
            <FooterList>Branded Links</FooterList>
            <FooterList>Analytics</FooterList>
          </FooterMenu1>
          <FooterMenu2>
            <FooterHead>Resources</FooterHead>
            <FooterList>Blog</FooterList>
            <FooterList>Developers</FooterList>
            <FooterList>Support</FooterList>
          </FooterMenu2>
          <FooterMenu3>
            <FooterHead>Company</FooterHead>
            <FooterList>About</FooterList>
            <FooterList>Our Team</FooterList>
            <FooterList>Carrers</FooterList>
            <FooterList>Contacts</FooterList>
          </FooterMenu3>
        </FooterItems>
        <FooterLinks>
          <FaceBookLogo>
            <img
              src={process.env.PUBLIC_URL + "assets/icon-facebook.svg"}
              alt="facebook"
            />
          </FaceBookLogo>
          <TwitterLogo>
            <img
              src={process.env.PUBLIC_URL + "assets/icon-twitter.svg"}
              alt="twitter"
            />
          </TwitterLogo>
          <PinterestLogo>
            <img
              src={process.env.PUBLIC_URL + "assets/icon-pinterest.svg"}
              alt="pinterest"
            />
          </PinterestLogo>
          <InstaLogo>
            <img
              src={process.env.PUBLIC_URL + "assets/icon-instagram.svg"}
              alt="instagram"
            />
          </InstaLogo>
        </FooterLinks>
      </MainFooter>
    </>
  );
};

export default Footer;
