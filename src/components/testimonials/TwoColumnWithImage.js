import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
// import { ReactComponent as QuotesLeftIcon } from "../../images/quotes-l.svg";
// import { ReactComponent as QuotesRightIcon } from "../../images/quotes-r.svg";
import { ReactComponent as ArrowLeftIcon } from "../../images/arrow-left-2-icon.svg";
import { ReactComponent as ArrowRightIcon } from "../../images/arrow-right-2-icon.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-4.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/svg-decorator-blob-5.svg";
import MadreVicky from "../../images/madreVicky.png";
import QueEsCasaHogar from '../../images/casahogar/queEsCasaHogar.jpg'
import QueHacemos from '../../images/casahogar/queHacemos.jpeg'
import "slick-carousel/slick/slick.css";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const TestimonialSliderContainer = tw.div`mt-24`;
const TestimonialSlider = styled(Slider)``;
const Testimonial = tw.div`flex! flex-col items-center md:items-stretch md:flex-row md:justify-center outline-none`;
const ImageContainer = styled.div`
  ${tw`md:mx-3 lg:mx-6 w-2/3 md:w-4/12 rounded flex items-center max-w-xs md:max-w-none`}
  img {
    ${tw`rounded`}
  }
`;
const TextContainer = tw.div`md:mx-3 lg:mx-6 md:w-6/12 py-4 flex flex-col`;
const QuoteContainer = tw.div`relative p-6 md:p-8 lg:p-10 mt-4 md:mt-0`;
const Quote = tw.blockquote`text-center md:text-left font-medium text-xl lg:text-2xl xl:text-3xl`;
const CustomerInfo = tw.div`px-5 lg:px-10 text-center md:text-left mt-4 md:mt-0`;
const CustomerName = tw.h5`font-bold text-lg lg:text-xl xl:text-2xl text-primary-500`;
const CustomerTitle = tw.p`font-medium text-sm`;

// const QuotesLeft = tw(QuotesLeftIcon)`w-8 h-8 lg:w-10 lg:h-10 text-primary-500 absolute top-0 left-0`;
// const QuotesRight = tw(QuotesRightIcon)`w-8 h-8 lg:w-10 lg:h-10 text-primary-500 absolute bottom-0 right-0`;

const SliderControlButtonContainer = styled.div`
  ${tw`absolute top-0 h-full flex items-end md:items-center z-20`}
  button {
    ${tw`text-secondary-500 hover:text-primary-500 focus:outline-none transition duration-300 transform hover:scale-125 transform -translate-y-2/3 md:translate-y-0`}
    svg {
      ${tw`w-8`}
    }
  }
`;

const NextArrow = ({ currentSlide, slideCount, ...props }) => (
  <SliderControlButtonContainer tw="right-0">
    <button {...props}>
      <ArrowRightIcon />
    </button>
  </SliderControlButtonContainer>
);
const PreviousArrow = ({ currentSlide, slideCount, ...props }) => (
  <SliderControlButtonContainer tw="left-0">
    <button {...props}>
      <ArrowLeftIcon />
    </button>
  </SliderControlButtonContainer>
);

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`absolute w-32 top-0 left-0 -z-10 text-primary-500 opacity-25 transform -translate-x-full`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`absolute w-32 bottom-0 right-0 -z-10 text-pink-500 opacity-15 transform translate-x-2/3 translate-y-8`;

export default () => {
  /*
   * You can modify the testimonials shown by modifying the array below
   * You can add or remove objects from the array as you need.
   */
  const testimonials = [
    {
      imageSrc: MadreVicky,
      quote:
        "Desde los inicios de mi proceso de formacion a la vida consagrada hubo una inquietud que buscaba constantemente en la oracion, saber cual era la voluntad de Dios. Despues de muchos años, el Senor me manifesto su voluntad al escuchar, ver y sentir el dolor de como los jovenes son atrapados y destruidos por las addiciones.",
      customerName: "MADRE VICKY",
      customerTitle: "Fundadora, Casa Hogar"
    },
    {
      imageSrc: QueEsCasaHogar,
      quote:
        "Es un lugar de encuentro con el amor misericordioso de Dios. Para sanarse del pecado y de las addiciones; a traves del silencio, paz, reflexion, y la oracion.",
      customerName: "QUE ES CASA HOGAR",
      customerTitle: "Fundada el 28 Jinio del 2019"
    },
    {
      imageSrc: QueHacemos,
      quote:
        "Ofresemos ayuda espiritual a las personas que tienen problemas personales en su matrimonio, con los hijos y a la familia en general; tambien pueden venir jovenes hacer una experiencia misionera para descubrir su vocasion. Y acompañamiento a los jovenes para la sanacion y liberacion con el problema de las addiciones.",
      customerName: "QUE HACEMOS",
      // customerTitle: "Event Manager, Brite"
    }
  ];
  return (
    <Container>
      <Content>
        <HeadingInfoContainer>
          <HeadingTitle style={{ color: '#6416FF' }}>QUINES SOMOS</HeadingTitle>
          <HeadingDescription></HeadingDescription>
        </HeadingInfoContainer>
        <TestimonialSliderContainer>
          <TestimonialSlider nextArrow={<NextArrow />} prevArrow={<PreviousArrow />}>
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index}>
                <ImageContainer>
                  <img src={testimonial.imageSrc} alt={testimonial.customerName} />
                </ImageContainer>
                <TextContainer>
                  <CustomerInfo>
                    <CustomerName>{testimonial.customerName}</CustomerName>
                    <CustomerTitle>{testimonial.customerTitle}</CustomerTitle>
                  </CustomerInfo>
                  <QuoteContainer>
                    {/* <QuotesLeft /> */}
                    <Quote>{testimonial.quote}</Quote>
                    {/* <QuotesRight /> */}
                  </QuoteContainer>
                  {/* <CustomerInfo>
                    <CustomerName>{testimonial.customerName}</CustomerName>
                    <CustomerTitle>{testimonial.customerTitle}</CustomerTitle>
                  </CustomerInfo> */}
                </TextContainer>
              </Testimonial>
            ))}
          </TestimonialSlider>
        </TestimonialSliderContainer>
      </Content>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
