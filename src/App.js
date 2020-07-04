import React from "react"
import './App.css';
import "tailwindcss/dist/base.css"
import AnimationRevealPage from "helpers/AnimationRevealPage"
import Hero from "components/hero/BackgroundAsImageWithCenteredContent"
import About from "components/features/TwoColSingleFeatureWithStats2"
import Staff from 'components/testimonials/ThreeColumnWithProfileImage'
import Pilares from 'components/features/VerticalWithAlternateImageAndText'
import FAQ from 'components/faqs/TwoColumnPrimaryBackground'
import Contact from 'components/forms/TwoColContactUsWithIllustrationFullForm'
import Footer from 'components/footers/MiniCenteredFooter'

function App() {
  return (
    <AnimationRevealPage>
      <Hero />
      <About />
      <Staff />
      <Pilares />
      <FAQ />
      <Contact />
      <Footer />
    </AnimationRevealPage>

  )
}

export default App
