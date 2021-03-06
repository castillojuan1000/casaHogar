import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

//Router Link
import { Link as RouterLink } from 'react-router-dom'

import { Container as ContainerBase } from "components/misc/Layouts.js"
import logo from "../../images/chLogo.png";
import { ReactComponent as FacebookIcon } from "../../images/facebook-icon.svg";
import { ReactComponent as YoutubeIcon } from "../../images/youtube-icon.svg";
import { ReactComponent as InstagramIcon } from "../../images/instagram.svg"


const Container = tw(ContainerBase)`bg-purple-700 text-gray-100 -mx-8 -mb-8`
const Content = tw.div`max-w-screen-xl mx-auto py-0 lg:py-0`;

const Row = tw.div`flex items-center justify-center flex-col`

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-24 py-4 hidden md:inline lg:inline xl:inline`;
// const LogoText = tw.h5`ml-2 text-2xl font-black tracking-wider`;

const LinksContainer = tw.div`mt-3 md:mt-0 lg:mt-0 xl:mt-0 font-medium flex flex-wrap justify-center items-center flex-row sm:flex-row`
const Link = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-2 lg:mx-4 text-sm lg:text-base`;

const ContactContainer = tw.div`my-3 flex justify-center flex-col items-center`
const Phone = tw.div` text-gray-100 text-sm font-bold border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4`
const Address = tw.div` text-gray-100 text-sm font-bold border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4`

const SocialLinksContainer = tw.div`mt-4`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const CopyrightText = tw.p`text-center my-4 mb-12 px-12 font-medium tracking-wide text-sm text-gray-600`
export default () => {
  return (
    <Container>
      <Content>
        <Row>
          <LogoContainer>
            <LogoImg src={logo} />
          </LogoContainer>
          <LinksContainer>
            <Link>
              <RouterLink to='/'>
                Home
            </RouterLink>
            </Link>

            <Link>
              <RouterLink to='/pilares'>
                Pilares
              </RouterLink>
            </Link>

            <Link>
              <RouterLink to='/faqs'>
                Preguntas
              </RouterLink>
            </Link>

            <Link>
              <RouterLink to='/donate'>
                Donaciones
              </RouterLink>
            </Link>

            <Link>
              <RouterLink to='/contact'>
                Contactanos
              </RouterLink>
            </Link>
          </LinksContainer>
          <ContactContainer>
            <Phone>Tel: <a
              href="tel:+1-678-227-3968">678-227-3968</a></Phone>
            <Address> Direccion: <a href="https://www.google.com/maps/search/?api=1&query=33.649755,-83.964471" target="_blank" rel="noopener noreferrer">355 Glen Rd NE, Conyers GA 30013</a></Address>
          </ContactContainer>
          <SocialLinksContainer>
            <SocialLink href="https://www.facebook.com/CasaHogarSCDJ/" target="_blank">
              <FacebookIcon />
            </SocialLink>
            <SocialLink href="https://www.instagram.com/casahogarscdj/" target="_blank">
              <InstagramIcon />
            </SocialLink>
            <SocialLink href="https://www.youtube.com/channel/UCnjVw1dUbgtufxMgYV-k8ZQ?sub_confirmation=1" target="_blank">
              <YoutubeIcon />
            </SocialLink>
          </SocialLinksContainer>
          <CopyrightText>
            &copy; Copyright 2020, Casa Hogar Secret Heart of Jesus. All Rights Reserved.
          </CopyrightText>
        </Row>
      </Content>
    </Container>
  );
};
