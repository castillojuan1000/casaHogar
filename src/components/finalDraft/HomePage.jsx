import React from 'react'
import Hero from "components/hero/BackgroundAsImageWithCenteredContent"
import About from 'components/testimonials/TwoColumnWithImage'
import Servicios from 'components/testimonials/TwoColumnWithImageAndRating'
import Footer from 'components/footers/MiniCenteredFooter'
export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Servicios />
      <Footer />
    </>
  )
}
