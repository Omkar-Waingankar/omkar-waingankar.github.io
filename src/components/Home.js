import React from 'react'
import NavBar from "./NavBar.js"
import Title from "./Title.js"
import Introduction from "./Introduction.js"
import Portfolio from "./Portfolio.js"
import Contact from "./Contact.js"
import Footer from "./Footer.js"

function Home() {
  return (
    <div>
      <NavBar />
      <Title />
      <Introduction />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
