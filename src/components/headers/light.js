// import React, { useContext } from "react"
// import { Link, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import tw from "twin.macro";
// import styled from "styled-components";
// import { css } from "styled-components/macro"; //eslint-disable-line

// import { UserContext } from "../../context/UserContext"

// import useAnimatedNavToggler from "../../helpers/useAnimatedNavToggler.js";

// import logo from "../../images/logo.png";
// import { ReactComponent as MenuIcon } from "feather-icons/dist/icons/menu.svg";
// import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";

// const Header = tw.header`
//   flex justify-between items-center
//   max-w-screen-xl mx-auto
// `;

// export const NavLinks = tw.div`inline-block`;

// export const NavLink = tw.a`
//   text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
//   font-semibold tracking-wide transition duration-300
//   pb-1 border-b-2 border-transparent hover:border-pink-700 hocus:text-pink-700
// `;

// export const PrimaryLink = tw(NavLink)`
//   lg:mx-0
//   px-8 py-3 rounded bg-pink-700 text-gray-100
//   hocus:bg-pink-900 hocus:text-gray-200 focus:shadow-outline
//   border-b-0
// `;

// export const LogoLink = styled(NavLink)`
//   ${tw`flex items-center font-black border-b-0 text-2xl! ml-0!`};

//   img {
//     ${tw`w-10 mr-3`}
//   }
// `;

// export const MobileNavLinksContainer = tw.nav`flex flex-1 items-center justify-between`;
// export const NavToggle = tw.button`
//   lg:hidden z-20 focus:outline-none hocus:text-pink-700 transition duration-300
// `;
// export const MobileNavLinks = motion(styled.div`
//   ${tw`lg:hidden z-10 fixed top-0 inset-x-0 mx-4 my-6 p-8 border text-center rounded-lg text-gray-900 bg-white`}
//   ${NavLinks} {
//     ${tw`flex flex-col items-center`}
//   }
// `);

// export const DesktopNavLinks = tw.nav`
//   hidden lg:flex flex-1 justify-between items-center
// `;

// export default ({ roundedHeaderButton = false, logoLink, links, className, collapseBreakpointClass = "lg" }) => {

//   const [userContext, setUserContext] = useContext(UserContext)
//   const navigate = useNavigate();

//   const logoutHandler = () => {
//     fetch(process.env.REACT_APP_API_ENDPOINT + "users/logout", {
//       credentials: "include",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${userContext.token}`,
//       },
//     }).then(async response => {
//       setUserContext(oldValues => {
//         return { ...oldValues, details: undefined, token: null }
//       })
//       window.localStorage.setItem("logout", Date.now())
//       navigate('/login');
//     })
//   }

//   const defaultLinks = [
//     <NavLinks key={1}>
//       <NavLink href="/" tw="lg:ml-12!">
//         <b>Home</b>
//       </NavLink>
//       <Link to="/search">
//         <NavLink tw="lg:ml-12!">
//           <b>Search</b>
//         </NavLink>
//       </Link>
//       {userContext.token !== null &&
//         <NavLink href="/profile" tw="lg:ml-12!">
//           <b>Profile</b>
//         </NavLink>
//       }
//       {userContext.token !== null &&
//         <PrimaryLink tw="lg:ml-12!" onClick={logoutHandler}>
//           <b>Logout</b>
//         </PrimaryLink>
//       }
//       {userContext.token === null &&
//         <>
//           <Link to="/login">
//             <NavLink tw="lg:ml-12!">
//             <b>Login</b>
//             </NavLink>
//           </Link>
//           <Link to="/register" style={{ marginTop: "1rem" }}>
//             <PrimaryLink css={roundedHeaderButton && tw`rounded-full`} >Register</PrimaryLink>
//           </Link>
//         </>
//       }
//     </NavLinks >
//   ];

//   const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
//   const collapseBreakpointCss = collapseBreakPointCssMap[collapseBreakpointClass];

//   const defaultLogoLink = (
//     <LogoLink href="/">
//       <img src={logo} alt="logo" />
//       Find Breweries
//     </LogoLink>
//   );

//   logoLink = logoLink || defaultLogoLink;
//   links = links || defaultLinks;

//   return (
//     <Header className={className || "header-light"}>
//       <DesktopNavLinks css={collapseBreakpointCss.desktopNavLinks}>
//         {logoLink}
//         {links}
//       </DesktopNavLinks>

//       <MobileNavLinksContainer css={collapseBreakpointCss.mobileNavLinksContainer}>
//         {logoLink}
//         <MobileNavLinks initial={{ x: "150%", display: "none" }} animate={animation} css={collapseBreakpointCss.mobileNavLinks}>
//           {links}
//         </MobileNavLinks>
//         <NavToggle onClick={toggleNavbar} className={showNavLinks ? "open" : "closed"}>
//           {showNavLinks ? <CloseIcon tw="w-6 h-6" /> : <MenuIcon tw="w-6 h-6" />}
//         </NavToggle>
//       </MobileNavLinksContainer>
//     </Header>
//   );
// };

// const collapseBreakPointCssMap = {
//   sm: {
//     mobileNavLinks: tw`sm:hidden`,
//     desktopNavLinks: tw`sm:flex`,
//     mobileNavLinksContainer: tw`sm:hidden`
//   },
//   md: {
//     mobileNavLinks: tw`md:hidden`,
//     desktopNavLinks: tw`md:flex`,
//     mobileNavLinksContainer: tw`md:hidden`
//   },
//   lg: {
//     mobileNavLinks: tw`lg:hidden`,
//     desktopNavLinks: tw`lg:flex`,
//     mobileNavLinksContainer: tw`lg:hidden`
//   },
//   xl: {
//     mobileNavLinks: tw`lg:hidden`,
//     desktopNavLinks: tw`lg:flex`,
//     mobileNavLinksContainer: tw`lg:hidden`
//   }
// };

import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";

import { UserContext } from "../../context/UserContext";

import useAnimatedNavToggler from "../../helpers/useAnimatedNavToggler.js";

import { ReactComponent as MenuIcon } from "feather-icons/dist/icons/menu.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";
import { Nav } from "react-bootstrap";

const Header = tw.header`
  flex justify-between items-center
  max-w-screen-xl mx-auto
`;

export const NavLinks = tw.div`inline-block `;

export const NavLink = tw.a`
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-bold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-blue-500 
`;

export const LogoLink = styled(NavLink)`
  ${tw`flex items-center font-black border-b-0 text-2xl! ml-0!`};
  img {
    ${tw`w-10 mr-3`}
  }
`;

export const MobileNavLinksContainer = tw.nav`flex flex-1 items-center justify-between`;
export const NavToggle = tw.button`
  lg:hidden z-20 focus:outline-none hocus:text-primary-500 transition duration-300
`;
export const MobileNavLinks = motion(styled.div`
  ${tw`lg:hidden z-10 fixed top-0 inset-x-0 mx-4 my-6 p-8 border text-center rounded-lg text-gray-900 bg-white`}
  ${NavLinks} {
    ${tw`flex flex-col items-center`}
  }
`);

export const DesktopNavLinks = tw.nav`
  hidden lg:flex flex-1 justify-between items-center
`;

export default ({
  logoLink,
  links,
  className,
  collapseBreakpointClass = "lg",
}) => {
  const [userContext, setUserContext] = useContext(UserContext);
  const navigate = useNavigate();

  const logoutHandler = () => {
    fetch(process.env.REACT_APP_API_ENDPOINT + "users/logout", {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userContext.token}`,
      },
    }).then(async (response) => {
      setUserContext((oldValues) => {
        return { ...oldValues, details: undefined, token: null };
      });
      window.localStorage.setItem("logout", Date.now());
      navigate("/login");
    });
  };
  
  const defaultLinks = [
    <NavLinks key={1}>
      <NavLink href="/" tw="lg:ml-12!">
        Home
      </NavLink>
      <Link to="/search">
        <NavLink tw="lg:ml-12!">Search</NavLink>
      </Link>
      {
        userContext.token !== null && (
          <NavLink href="/profile" tw="lg:ml-12!">Profile</NavLink>
        )
      }
      {userContext.token !== null && (
        <NavLink tw="lg:ml-12!" onClick={logoutHandler}>Logout</NavLink>
      )}
      {userContext.token === null && (
        <>
          <Link to="/login">
            <NavLink tw="lg:ml-12!">Login</NavLink>
          </Link>
          <Link to="/register" style={{ marginTop: "1rem" }}>
            <NavLink>Sign Up</NavLink>
          </Link>
        </>
      )}
    </NavLinks>,
  ];

  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
  const collapseBreakpointCss =
    collapseBreakPointCssMap[collapseBreakpointClass];

  const defaultLogoLink = (
    <LogoLink href="/">
      BrewCritic
    </LogoLink>
  );

  logoLink = logoLink || defaultLogoLink;
  links = links || defaultLinks;

  return (
    <Header className={className || "header-light"}>
      <DesktopNavLinks css={collapseBreakpointCss.desktopNavLinks}>
        {logoLink}
        {links}
      </DesktopNavLinks>

      <MobileNavLinksContainer
        css={collapseBreakpointCss.mobileNavLinksContainer}
      >
        {/* {logoLink} */}
        <MobileNavLinks
          initial={{ x: "150%", display: "none" }}
          animate={animation}
          css={collapseBreakpointCss.mobileNavLinks}
        >
          {links}
        </MobileNavLinks>
        <NavToggle
          onClick={toggleNavbar}
          className={showNavLinks ? "open" : "closed"}
        >
          {showNavLinks ? (
            <CloseIcon tw="w-6 h-6" />
          ) : (
            <MenuIcon tw="w-6 h-6" />
          )}
        </NavToggle>
      </MobileNavLinksContainer>
    </Header>
  );
};


const collapseBreakPointCssMap = {
  sm: {
    mobileNavLinks: tw`sm:hidden`,
    desktopNavLinks: tw`sm:flex`,
    mobileNavLinksContainer: tw`sm:hidden`,
  },
  md: {
    mobileNavLinks: tw`md:hidden`,
    desktopNavLinks: tw`md:flex`,
    mobileNavLinksContainer: tw`md:hidden`,
  },
  lg: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`,
  },
  xl: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`,
  },
};
