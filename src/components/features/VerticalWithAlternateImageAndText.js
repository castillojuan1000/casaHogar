import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
import { SectionHeading } from "../misc/Headings.js";


//fotos
import Oracion from "../../images/oracion.png";
import Apostolado from "../../images/apostolado.png";
import Trabajo from '../../images/casahogar/trabajo.png'
import Estudio from '../../images/casahogar/estudio.jpg'
import VidaComunitaria from '../../images/casahogar/vidaComunitaria.jpeg'

//navbar
import Header, { NavLink, NavLinks, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";
import { Link as RouterLink } from 'react-router-dom'

const StyledHeader = styled(Header)`
  ${tw`lg:mx-6 mt-4 mb-20 px-8 lg:px-4 xl:px-4  max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-800 hover:border-primary-500 hover:text-primary-500`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-900 hover:text-primary-500`}
  }
`;

const MainTitle = tw(SectionHeading)`text-primary-500`

const Heading = tw(
  SectionHeading
)`mb-4 font-black text-left text-lg sm:text-lg lg:text-lg text-left md:text-left leading-tight text-primary-500`;

const Container = tw.div`relative`;

const SingleColumn = tw.div`max-w-screen-xl mx-auto`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-md`;

const Content = tw.div`mt-16 mb-16`;

const Card = styled.div(props => [
  tw`mt-32 md:flex justify-center items-center`,
  props.reversed ? tw`flex-row-reverse` : "flex-row"
]);
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded-4xl md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-64 md:h-96 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`
]);
const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const Title = tw.h4`text-3xl font-bold text-gray-900`;
const Description = tw.p`mt-2 text-sm leading-loose`;


const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute top-0 left-0 transform -translate-x-20 rotate-90 translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern2 = tw(
  SvgDotPatternIcon
)`absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern3 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 left-0 transform -translate-x-20 rotate-45 -translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern4 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-x-20 rotate-90 -translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;

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

  const cards = [
    {
      imageSrc: Oracion,
      title: "ORACION",
      heading: "+ Oracion - Adiccion",
      description:
        "Siendo este el primer pilar, es el más importante ya que de la oración los mantiene fuertes en los demás pilares, la oración los sostiene, les fortalece y les ayuda a vencer la ansiedad y perseverar en su programa.",

    },

    {
      imageSrc: Estudio,

      title: "ESTUDIO",
      heading: "+ Integridad - Ignorancia",
      description:
        "Poniendo en efecto la parte de la educación de una persona completa, el pilar del estudio ayuda a formar la mente, el espíritu y toda la persona de una manera integra.Tiene uno que motivar mucho a los jóvenes a que le encuentren el sentido al estudio ya que por la vida que han llevado durante mucho tiempo, a muchos jóvenes no les gusta el estudio…uno sabe que es necesario para la recuperación de su autoestima y en muchos otros aspectos de su persona.",

    },

    {
      imageSrc: Trabajo,

      title: "TRABAJO",
      heading: "+ Talento - Pereza",
      description:
        'El trabajo y la actividad manual ayuda a forjar el carácter del chico que se esta recuperando de la adicción, también le ayuda a fortalecer su voluntad, purifica su Espíritu para hacerlo responsable y cumplido en todo lo que su recuperación le exige además que lo prepara a tener sentido de responsabilidad en el presente y por el resto de su vida.',

    },
    {
      imageSrc: VidaComunitaria,

      title: "VIDA COMUNITARIA",
      heading: "+ Amor - Egoismo",
      description:
        "Vida en comunidad ciertamente es un pilar de gran importancia en el joven que se esta rehabilitando, pues recobran la importancia de vivir en familia que por ahora es compartir con los demás jóvenes que tienen el mismo problema con un mismo ideal el de querer salir de las adicciones.",

    },
    {
      imageSrc: Apostolado,

      title: "SERVICIO MISIONERO",
      heading: "+ Humildad - Tristeza",
      description:
        "Por apostolado se entiende una actividad concreta de servicio ayudando al prójimo, ya sea individual o en familia, cuyo fin es servir a los hermanos mediante las obras de misericordia y dar a conocer la Palabra de Dios.",

    }
  ];

  return (
    <Container>
      <StyledHeader links={navLinks} />
      <SingleColumn>
        
        <HeadingInfoContainer>
          <MainTitle>PILARES DEL PROGRAMA</MainTitle>
          <HeadingDescription>
            Los pilares son una parte esensial en el crecimiento y desarollo de la persona dentro del programa. El programa esta compuesto de 5 pilares con intension de fortalezer el espiritu, cuerpo y mente de la persona.
          </HeadingDescription>
        </HeadingInfoContainer>

        <Content>
          {cards.map((card, i) => (
            <Card key={i} reversed={i % 2 === 1}>
              <Image imageSrc={card.imageSrc} />
              <Details>

                <Title>{card.title}</Title>
                <Heading>{card.heading}</Heading>
                <Description>{card.description}</Description>

              </Details>
            </Card>
          ))}
        </Content>
      </SingleColumn>
      <SvgDotPattern1 />
      <SvgDotPattern2 />
      <SvgDotPattern3 />
      <SvgDotPattern4 />
    </Container>
  );
};
