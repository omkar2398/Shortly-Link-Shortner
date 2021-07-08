import React from "react";
import { BrowserRouter } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  Navbarcontainer,
  Navlogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn1,
  NavBtn2,
  NavBtnLink1,
  NavBtnLink2,
} from "./Navbar.styled";

const RespNavbar = ({ mytoggleHandler }) => {
  return (
    <>
      <BrowserRouter>
        <Nav>
          <Navbarcontainer>
            <Navlogo>
              <img
                src={process.env.PUBLIC_URL + "assets/logo.svg"}
                alt="react-logo"
              />
            </Navlogo>
            <MobileIcon onClick={mytoggleHandler}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to="Features">Features</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="Pricing">Pricing</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="Resources">Resources</NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn1>
              <NavBtnLink1 to="Login">Login</NavBtnLink1>
            </NavBtn1>
            <NavBtn2>
              <NavBtnLink2 to="Signup">Sign Up</NavBtnLink2>
            </NavBtn2>
          </Navbarcontainer>
        </Nav>
      </BrowserRouter>
    </>
  );
};

export default RespNavbar;
