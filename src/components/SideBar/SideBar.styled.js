import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { Link as LinkS } from "react-router-dom";
import { Link as LinkR } from "react-router-dom";

export const SidebarContainer = styled.aside`
  @media screen and (max-width: 1440px) {
    display: none;
  }

  @media screen and (max-width: 375px) {
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    background-color: #3b3054;
    font-size: 18px;
    font-weight: bold;
    width: 90vw;
    margin: auto;
    padding: 1rem 0;
    border-radius: 20px;
    opacity: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
    top: ${({ isOpen }) => (isOpen ? "15%" : "-100%")};
  }
`;

export const CloseIcon = styled(FaBars)`
  color: #bfbfbf;
`;

export const Icon = styled.div`
  position: absolute;
  background: transparent;
  font-size: 1.5rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  margin: 0 auto;
  padding: 0;
`;

export const SidebarMenu = styled.ul`
  display: block;
  text-align: center;
  padding: 0;
  margin: 0;
  @media screen and (max-width: 375px) {
    display: block;
  }
`;

export const SidebarLink = styled(LinkS)`
  display: block;
  padding: 1rem 0;
  font-size: 18px;
  text-decoration: none;
  list-style: none;
  transition: all 0.2s ease-in-out;
  color: white;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    color: black;
    transition: all 0.2s ease-in-out;
  }
`;

export const SideBtnWrap1 = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 0 0 0;
  border-top: 1px solid #bfbfbf;
`;
export const SideBtnWrap2 = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 0;
`;

export const SidebarRoute1 = styled(LinkR)`
  border-radius: 50px;
  white-space: nowrap;
  padding: 16px 64px;
  color: white;
  font-size: 18px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #000;
  }
  @media screen and (max-width: 760px) {
    padding: 8px;
  }
`;

export const SidebarRoute2 = styled(LinkR)`
  border-radius: 50px;
  background-color: #2acfcf;
  white-space: nowrap;
  padding: 1rem 6rem;
  color: white;
  font-size: 18px;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #000;
  }
`;
