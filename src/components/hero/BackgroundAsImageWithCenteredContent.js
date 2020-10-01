import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import MainBackground1 from "../../images/MainBackground3.png";
import smoothscroll from 'smoothscroll-polyfill';




//Router Link
import { Link as RouterLink } from 'react-router-dom'

import Header, { NavLink, NavLinks, PrimaryLink as PrimaryLinkBase, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";

const StyledHeader = styled(Header)`
  ${tw`pt-8 px-8 lg:px-4 xl:px-4 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-primary-500 hover:text-primary-500`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;


const Container = styled.div`
  ${tw`relative -mx-8 bg-center bg-cover h-screen min-h-144`}
  background-image: url(${MainBackground1});
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-25`;

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`;

const Heading = styled.h1`
  ${tw`text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const PrimaryAction = tw.button`rounded-full px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 font-bold shadow transition duration-300 bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:outline-none focus:shadow-outline`;

window.__forceSmoothScrollPolyfill__ = true;
smoothscroll.polyfill();

export default () => {
  const navLinks = [
    <NavLinks key={1}>

      <NavLink >
        <RouterLink to='/'>
          Home
        </RouterLink>
      </NavLink>

      <NavLink>
        <RouterLink to='pilares'>
          Pilares
        </RouterLink>
      </NavLink>

      <NavLink >
        <RouterLink to='/faqs'>
          Preguntas
        </RouterLink>
      </NavLink>

      <NavLink>
        <RouterLink to='/contact'>
          contactanos
        </RouterLink>
      </NavLink>

    </NavLinks>,
    <NavLinks key={2}>
      {/* <PrimaryLink href="/#">
        Hire Us
      </PrimaryLink> */}
    </NavLinks>
  ];


  function showMore() {
    // let x = windowWidth >= 650 ? 1000 : 800;

    window.scrollBy({
      top: window.innerHeight,
      left: 0,
      behavior: "smooth"
    })

  }

  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader links={navLinks} />
        <Content>
          <Heading>
            Casa Hogar
              <br />
              Sagrado Corazón de Jesus
          </Heading>
          <PrimaryAction onClick={showMore}>Aprende Mas</PrimaryAction>
        </Content>
      </HeroContainer>
    </Container>
  );
};
