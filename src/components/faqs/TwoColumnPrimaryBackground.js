import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled, { css } from "styled-components/macro"; //eslint-disable-line
import { Container } from "components/misc/Layouts.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
// import { SectionDescription } from "components/misc/Typography.js";
import { ReactComponent as ChevronDownIcon } from "feather-icons/dist/icons/chevron-down.svg";

//navbar
import Header, { NavLink, NavLinks, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";
import { Link as RouterLink } from 'react-router-dom'

const StyledHeader = styled(Header)`
  ${tw`pb-4 lg:pb-12 px-8 lg:px-4 xl:px-4 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-primary-100 hover:text-primary-100`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-gray-400`}
  }
`;



const PrimaryBackgroundContainer = tw(Container)`-mx-8 px-8 h-auto  lg:h-screen xl:h-screen bg-primary-900 text-gray-100`;
const ContentWithPaddingXl = tw.div`max-w-screen-xl mx-auto pt-4 lg:py-12`;

const HeadingContainer = tw.div``;
const Subheading = tw(SubheadingBase)`text-center text-gray-100 mb-4`;
const Heading = tw(SectionHeading)``;
// const Description = tw(SectionDescription)`mx-auto px-6 text-center text-gray-300`;

const FaqsContainer = tw.div`mt-10 sm:mt-16 px-6 w-full flex-1 lg:flex justify-between items-start max-w-screen-lg mx-auto`;
const FaqsColumn = tw.div`w-full lg:max-w-lg lg:mr-12 last:mr-0`;
const Faq = tw.div`select-none cursor-pointer border-b-2 border-primary-300 hover:border-primary-500 transition-colors duration-300 py-6`;
const Question = tw.div`flex justify-between items-center`;
const QuestionText = tw.div`text-sm sm:text-lg font-semibold tracking-wide`;
const QuestionToggleIcon = styled(motion.span)`
  ${tw`ml-2 transition duration-300`}
  svg {
    ${tw`w-6 h-6`}
  }
`;
const Answer = tw(motion.div)`hidden text-sm font-normal mt-4 text-gray-300`;
export default ({

  subheading = "",
  heading = "Preguntas Frecuentes",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  faqs = [
    {
      question: "El programa es solo para los addictos a las drogas ?",
      answer:
        "Yes, it is, if you have a membership with us. Otherwise it is charged as per the menu. Some limits do apply as to how much items can be included in your lunch. This limit is enough for any one person and merely exists to discourage abusal of the system."
    },
    {
      question: "Es el programa solo para hombres ?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      question: "Cual es la edad para poder ingresar ?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      question: "Quiero ayudar con el programa, que necesito hacer ?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      question: "Cual es el costo del programa ? ",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      question: "Cual es la duracion del programa ?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    }
  ]
}) => {
  const faqCol1 = [];
  const faqCol2 = [];
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  const toggleQuestion = questionIndex => {
    if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
    else setActiveQuestionIndex(questionIndex);
  };

  faqs.map((faq, index) => {
    const renderedFaq = (
      <Faq key={index} onClick={() => toggleQuestion(index)}>
        <Question>
          <QuestionText>{faq.question}</QuestionText>
          <QuestionToggleIcon
            variants={{
              collapsed: { rotate: 0 },
              open: { rotate: -180 }
            }}
            initial="collapsed"
            animate={activeQuestionIndex === index ? "open" : "collapsed"}
            transition={{ duration: 0.02, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <ChevronDownIcon />
          </QuestionToggleIcon>
        </Question>
        <Answer
          variants={{
            open: { opacity: 1, height: "auto", marginTop: "16px", display: "block" },
            collapsed: { opacity: 0, height: 0, marginTop: "0px", display: "none" }
          }}
          initial="collapsed"
          animate={activeQuestionIndex === index ? "open" : "collapsed"}
          transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
        >
          {faq.answer}
        </Answer>
      </Faq>
    );

    if (index % 2 === 0) faqCol1.push(renderedFaq);
    else faqCol2.push(renderedFaq);

    return null;
  });

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

  return (
    <PrimaryBackgroundContainer>
      <StyledHeader links={navLinks} />
      <ContentWithPaddingXl>
        
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <Heading>{heading}</Heading>
          {/* <Description>{description}</Description> */}
        </HeadingContainer>
        <FaqsContainer>
          <FaqsColumn>{faqCol1}</FaqsColumn>
          <FaqsColumn>{faqCol2}</FaqsColumn>
        </FaqsContainer>
      </ContentWithPaddingXl>
    </PrimaryBackgroundContainer>
  );
};
