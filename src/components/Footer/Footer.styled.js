import styled from "styled-components";

export const FooterContainer = styled.div`
  position: relative;
  width: 100%;
  & > img {
    width: 100%;
    background-color: #3b3054;
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

// export const FooterContainer = styled.div`
//   display: flex;
//   margin-top: -6rem;
//   height: 240px;
//   width: 100%;
//   background-color: #3b3054;
//   padding-bottom: 1rem;
//   @media screen and (max-width: 980px) {
//     display: block;
//   }
// `;

// export const Background = styled.div`
//   display: flex;
//   height: 71%;
//   width: 86%;
//   align-items: center;
//   justify-content: center;
//   margin-top: 2px;
//   background-color: #3b3054;
//   @media screen and (max-width: 980px) {
//     display: block;
//   }
// `;

// export const GetStarted = styled.div`
//   display: flex;
//   @media screen and (max-width: 980px) {
//     display: block;
//   }
// `;

// export const Head = styled.h1`
//   display: flex;
//   font-size: 32px;
//   color: white;
//   position: absolute;
//   text-decoration: none;
//   margin-top: 1.5rem;
//   margin-left: 17rem;
//   width: 60%;
//   height: 40px;
//   text-align: center;
//   justify-content: center;
//   @media screen and (max-width: 980px) {
//     display: block;
//   }
// `;

// export const Btn = styled.button`
//   display: flex;
//   position: absolute;
//   justify-content: center;
//   border-radius: 50px;
//   color: white;
//   background-color: #2acfcf;
//   white-space: nowrap;
//   padding: 10px 30px;
//   font-size: 18px;
//   cursor: pointer;
//   outline: none;
//   border: none;
//   text-decoration: none;
//   height: 55px;
//   margin-right: 10px;
//   align-items: center;
//   margin-top: 6rem;
//   margin-left: 35rem;
//   @media screen and (max-width: 980px) {
//     display: block;
//   }
// `;

// export const MainFooter = styled.div`
//   display: flex;
//   height: 250px;
//   width: 100%;
//   margin-top: -32px;
//   background-color: #232127;
//   @media screen and (max-width: 980px) {
//     display: block;
//   }
// `;

// export const Logo = styled.div`
//   display: flex;
//   justify-self: start;
//   cursor: pointer;
//   align-items: center;
//   text-decoration: none;
//   color: white;
//   height: 40px;
//   width: auto;
//   margin-top: 4rem;
//   margin-left: 9rem;
//   font-size: 30px;
//   font-weight: bold;
//   @media screen and (max-width: 980px) {
//     display: block;
//   }
// `;

// export const FooterItems = styled.div`
//   display: flex;
//   height: 150px;
//   width: 40%;
//   margin-top: 4rem;
//   margin-left: 9rem;
//   @media screen and (max-width: 980px) {
//     display: block;
//   }
// `;

// export const FooterHead = styled.h2`
//   font-size: 18px;
//   color: white;
//   @media screen and (max-width: 980px) {
//     display: block;
//   }
// `;

// export const FooterMenu1 = styled.ul`
//   display: grid;
//   list-style: none;
//   font-size: 15px;
//   width: 150px;
//   align-items: center;
//   justify-content: center;
//   color: #bfbfbf;
//   cursor: pointer;
//   @media screen and (max-width: 980px) {
//     display: block;
//   }
// `;
// export const FooterMenu2 = styled.ul`
//   display: grid;
//   position: absolute;
//   list-style: none;
//   height: 149px;
//   font-size: 15px;
//   width: 170px;
//   margin-left: 10rem;
//   align-items: center;
//   justify-content: center;
//   color: #bfbfbf;
//   cursor: pointer;
//   @media screen and (max-width: 980px) {
//     display: block;
//   }
// `;
// export const FooterMenu3 = styled.ul`
//   display: grid;
//   position: absolute;
//   list-style: none;
//   font-size: 15px;
//   height: 149px;
//   width: 170px;
//   margin-left: 20rem;
//   align-items: center;
//   justify-content: center;
//   color: #bfbfbf;
//   cursor: pointer;
//   @media screen and (max-width: 980px) {
//     display: flex;
//   }
// `;

// export const FooterList = styled.li`
//   height: 10px;
//   @media screen and (max-width: 980px) {
//     display: block;
//   }
// `;

// export const FooterLinks = styled.div`
//   display: flex;
//   position: absolute;
//   margin-top: 4rem;
//   height: 50px;
//   width: 18%;
//   margin-left: 60rem;
//   @media screen and (max-width: 980px) {
//     display: block;
//   }
// `;

// export const FaceBookLogo = styled.div`
//   display: flex;
//   position: absolute;
//   margin-top: 10px;
//   align-items: center;
//   justify-content: center;
//   margin-left: 1rem;
//   cursor: pointer;
//   @media screen and (max-width: 980px) {
//     display: flex;
//   }
// `;
// export const TwitterLogo = styled.div`
//   display: flex;
//   position: absolute;
//   margin-top: 13px;
//   align-items: center;
//   justify-content: center;
//   margin-left: 4rem;
//   cursor: pointer;
//   @media screen and (max-width: 980px) {
//     display: flex;
//   }
// `;
// export const PinterestLogo = styled.div`
//   display: flex;
//   position: absolute;
//   margin-top: 10px;
//   align-items: center;
//   justify-content: center;
//   margin-left: 7rem;
//   cursor: pointer;
//   @media screen and (max-width: 980px) {
//     display: flex;
//   }
// `;
// export const InstaLogo = styled.div`
//   display: flex;
//   position: absolute;
//   margin-top: 10px;
//   align-items: center;
//   justify-content: center;
//   margin-left: 10rem;
//   cursor: pointer;
//   @media screen and (max-width: 980px) {
//     display: flex;
//   }
// `;
