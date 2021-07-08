import React, { useState } from "react";
import RespNavbar from "../Navbar/Navbar";
import Sidebar from "../SideBar/SideBar";

const Home = () => {
  const [isOpen, setIsOpen] = useState("");

  const mytoggleHandler = (e) => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <RespNavbar mytoggleHandler={mytoggleHandler} />
      <Sidebar isOpen={isOpen} />
    </>
  );
};

export default Home;
