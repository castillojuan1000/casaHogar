import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import axios from 'axios'

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

//stripe dependencies

import StripeCheckout from "react-stripe-checkout";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import DonarImage1 from "../../images/casahogar/Donar1.jpg";


//Router Link
import { Link as RouterLink } from 'react-router-dom'

import Header, { NavLink, NavLinks, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";

const StyledHeader = styled(Header)`
  ${tw`pt-8 px-8 lg:px-4 xl:px-4 max-w-none w-full text-gray-900`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-900 hover:border-primary-500 hover:text-primary-500`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-900 hover:text-primary-500`}
  }
`;
//initialize toast 
toast.configure();

const useStyles = makeStyles((theme) => ({
  root: {
    marginRight: "1rem",
    width: "20ch"
  }
}));

const Container = tw.div`relative lg:bg-cover lg:h-screen lg:min-h-144`;
const TwoColumn = tw.div`flex flex-col lg:flex-row md:items-center max-w-screen-xl mx-auto mt--10 lg:mt-32 py-20 md:py-24`;


const LeftColumn = tw.div`relative lg:w-6/12 lg:pr-12 flex-shrink-0 text-center lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex flex-col justify-center`;

const Heading = tw.h1`font-black text-3xl md:text-5xl leading-snug max-w-3xl`;
const Paragraph = tw.p`my-5 lg:my-8 text-sm lg:text-base font-medium text-gray-600 max-w-lg mx-auto lg:mx-0`;


const SelectAmountParagraph = tw.p`my-5 lg:my-6 text-sm lg:text-base font-bold text-primary-500 max-w-lg mx-auto lg:mx-0`;

const VarifyAmountParagraph = tw.p`mt-5 lg:mt-8 text-sm lg:text-base font-bold text-primary-500 max-w-lg mx-auto lg:mx-0`;

//Amount Buttons
const SelectAmount = tw.div`flex flex-row justify-around mb-6 lg:justify-between content-center`
const AmountButton = tw.button`font-bold px-4 lg:px-10 py-2 lg:py-3 rounded bg-yellow-500 text-gray-100 hocus:bg-yellow-700 focus:shadow-outline focus:outline-none transition duration-300`;
const AmountStyling = tw.span`text-red-600`

const Actions = tw.div`flex flex-col items-center sm:flex-row justify-around lg:justify-start  mt-4`;
const PayStripeButton = tw.button`font-bold px-8 lg:px-10 py-3 my-4 lg:mr-10 rounded bg-primary-500 text-gray-100 hocus:bg-green-500 focus:shadow-outline focus:outline-none transition duration-300`;


const IllustrationContainer = tw.div`flex justify-center md:justify-end items-center relative max-w-3xl lg:max-w-none`;

// Random Decorator Blobs (shapes that you see in background)
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none opacity-15 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3  -z-10`}
`;


export default ({
  heading = "Modern React Templates, Just For You",
  description = "Our templates are easy to setup, understand and customize. Fully modular components with a variety of pages and components.",
  donaccionParagraph = 'Por favor seleccione su donacion:',
  PaywithStripeText = "Donar Con Tarjeta",
  imageSrc = DonarImage1,
  imageCss = null,

}) => {

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

    </NavLinks>,
    <NavLinks key={2}>
      {/* <PrimaryLink href="/#">
        Hire Us
      </PrimaryLink> */}
    </NavLinks>
  ];

  const [amount, setAmount] = useState(null)
  const [otherAmount, setOtherAmount] = useState('')
  const classes = useStyles();

  async function handleToken(token, addresses) {
    const response = await axios.post("https://fathomless-sierra-99548.herokuapp.com/checkout", { token, amount })
    const { status } = response.data
    console.log("Response: ", response.data)
    console.log({ "status": status })

    if (status === "Success") {
      toast("Success! Check email for details", { type: "success" });
      setAmount(null)
      setOtherAmount('')
    } else {
      toast("Something went wrong, pleasse verify your card information and try again", { type: "error" });
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setAmount(otherAmount)
  };


  return (
    <>
      <StyledHeader links={navLinks} />

      <Container>
        <TwoColumn>
          <LeftColumn>
            <Heading>{heading}</Heading>
            <Paragraph>{description}</Paragraph>
            <DecoratorBlob1 />
            <SelectAmountParagraph>{donaccionParagraph}</SelectAmountParagraph>
            <SelectAmount>
              <AmountButton
                value={5}
                onClick={(e) => {
                  setAmount(+e.target.value)
                  setOtherAmount('')
                }}> $5</AmountButton>
              <AmountButton
                value={10}
                onClick={(e) => {
                  setAmount(+e.target.value)
                  setOtherAmount('')
                }}>$10</AmountButton>
              <AmountButton
                value={25}
                onClick={(e) => {
                  setAmount(+e.target.value)
                  setOtherAmount('')
                }}>$25</AmountButton>
              <AmountButton
                value={50}
                onClick={(e) => {
                  setAmount(+e.target.value)
                  setOtherAmount('')
                }}>$50</AmountButton>
            </SelectAmount>
            <form onSubmit={handleSubmit}>
              <TextField
                id="outlined-basic"
                label="Otra Cantidad"
                variant="outlined"
                value={otherAmount}
                onChange={(e) => setOtherAmount(+e.target.value.replace(/[^0-9,.]/g, ""))}
                size="small"
                className={classes.root}
                required
              />

              <Button variant="contained" color="primary" size="medium" type="submit">
                submit
            </Button>
            </form>

            {(amount !== null && amount !== 0) && <VarifyAmountParagraph>Su targeta sera cargada con <AmountStyling>${amount}</AmountStyling> USD</VarifyAmountParagraph>}


            <Actions>
              <StripeCheckout stripeKey="pk_test_51HZwqOIOzjuhc7bJRv25KUOeld7n95J0gfUV8x0hEuQ9MPzVGkBr0ISMvON3nkW27SXXw5LIoF0MNLCNt9jRXRBb00GVbarqvU"
                amount={amount * 100}
                token={handleToken}
                name='Donacion Casa Hogar SCJ'
                billingAddress
                shippingAddress={false}
                zipCode={false}
                allowRememberMe
                disabled={amount === null || amount === 0}
              >
                <PayStripeButton>{PaywithStripeText}</PayStripeButton>

              </StripeCheckout>


            </Actions>
          </LeftColumn>
          <RightColumn>
            <IllustrationContainer>
              <img
                css={imageCss}
                src={imageSrc}
                alt="Hero"
                style={{ width: '90%' }}
              />

            </IllustrationContainer>
          </RightColumn>
        </TwoColumn>
        <DecoratorBlob1 />
      </Container>
    </>
  );
};
