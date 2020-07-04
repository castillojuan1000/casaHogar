import React from 'react'
import Hero from "components/hero/BackgroundAsImageWithCenteredContent"
import About from 'components/testimonials/TwoColumnWithImage'
import Staff from 'components/testimonials/ThreeColumnWithProfileImage'
import Footer from 'components/footers/MiniCenteredFooter'
export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Staff />
      <Footer />
    </>
  )
}
