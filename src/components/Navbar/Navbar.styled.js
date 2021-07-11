import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80px;
  margin: 2rem 0;
  font-size: 18px;
  z-index: 10;
  width: 100vw;
  @media screen and (max-width: 980px) {
    margin: 0;
    transition: 0.8s all ease;
  }
`;

export const Navbarcontainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem calc((100vw-1000px) / 2);
  z-index: 1;
  width: 100%;
`;

export const Navlogo = styled(Link)`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 18px;
  text-decoration: none;
  @media screen and (max-width: 980px) {
    position: absolute;
    top: 20px;
    left: 15px;
    transform: tranlate(25%, 90%);
  }
`;
export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 980px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 45%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  width: 50vw;
  font-weight: bold;
  font-size: 18px;
  @media screen and (max-width: 980px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(Link)`
  color: #bfbfbf;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;

export const NavBtn1 = styled.nav`
  display: flex;
  font-weight: bold;
  align-items: center;
  padding: 0 2rem 0 0;
  @media screen and (max-width: 980px) {
    display: none;
  }
`;

export const NavBtn2 = styled.nav`
  display: flex;
  font-weight: bold;
  align-items: center;

  @media screen and (max-width: 980px) {
    display: none;
    background-color: #2acfcf;
  }
`;
export const NavBtnLink1 = styled(Link)`
  color: #bfbfbf;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;

export const NavBtnLink2 = styled(Link)`
  border-radius: 50px;
  color: white;
  background-color: #2acfcf;
  white-space: nowrap;
  padding: 0.7rem 2rem;
  font-size: 18px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: #8affff;
  }
`;
