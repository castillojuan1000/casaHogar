import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import EmailIllustrationSrc from "images/email-illustration.svg";
import emailjs from 'emailjs-com';

//navbar
import Header, { NavLink, NavLinks, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";
import { Link as RouterLink } from 'react-router-dom'

const StyledHeader = styled(Header)`
  ${tw`mx-6 mt-4 px-8 px-8 lg:px-4 xl:px-4 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-800 hover:border-primary-500 hover:text-primary-500`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-900 hover:text-primary-500`}
  }
`;



const Container = tw.div`relative `;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`
const Textarea = styled(Input).attrs({ as: "textarea" })`
  ${tw`h-24`}
`

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8 max-w-xs md:max-w-md lg:max-w-md mx-6 md:mx-0 lg:mx-0`

export default ({
  subheading = "Contactanos",
  heading = <>Sientete libre <span tw="text-primary-500">de contactarnos</span></>,
  description = "Si usted tiene alguna pregunta acerca del programa, por favor no dude en contactarme para más información.",
  submitButtonText = "Send",
  formAction = "#",
  formMethod = "get",
  textOnLeft = true,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

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

      <NavLink >
        <RouterLink to='/donate'>
          Donaciones
        </RouterLink>
      </NavLink>

      <NavLink>
        <RouterLink to='/contact'>
          Contactanos
        </RouterLink>
      </NavLink>

    </NavLinks>
  ];

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('castillojuan1000', 'template_5yr6ait', e.target, 'user_8JfUghHikE5u11h9x0oT1')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
  }




  return (
    <>
    
    
    
    <Container>
    <StyledHeader links={navLinks} />
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc={EmailIllustrationSrc} />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            {description && <Description>{description}</Description>}
            <Form onSubmit={sendEmail}>
              <Input type="email" name="email" placeholder="Correo electronico / Email" />
              <Input type="text" name="name" placeholder="Nombre / Full Name" />
              <Input type="text" name="subject" placeholder="Asunto / Subject" />
              <Textarea name="message" placeholder="Mensaje / Message" />
              <SubmitButton type="submit">{submitButtonText}</SubmitButton>
            </Form>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
    </>
  );
};
