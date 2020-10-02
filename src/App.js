import React from "react"
import './App.css';
import "tailwindcss/dist/base.css"
import AnimationRevealPage from "helpers/AnimationRevealPage"

//componets 
import Home from 'components/finalDraft/HomePage'
import Pilares from 'components/finalDraft/Pillares'
import FAQs from 'components/finalDraft/FAQs'
import ContactUs from 'components/finalDraft/ContactUs'
import Donate from 'components/finalDraft/Donate'

//Routers 
import { Switch, Route } from 'react-router-dom'



function App() {
  return (

    <AnimationRevealPage>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/pilares' component={Pilares} />
        <Route exact path='/faqs' component={FAQs} />
        <Route exact path='/contact' component={ContactUs} />
        <Route exact path='/donate' component={Donate} />
      </Switch>

    </AnimationRevealPage>


  )
}

export default App
