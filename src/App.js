import React from 'react'
import "./App.css";
import Header from './Components/header/Header';
import Home from './Components/home/Home';
import About from './Components/about/About';
import Skill from './Components/skill/Skill';
import Service from './Components/service/Service';
import Qualification from './Components/qualification/Qualification';
import Testimonials from './Components/testimonials/Testimonials';
import Contact from './Components/contact/Contact';
import Footer from './Components/footer/Footer';
import ScrollUp from './Components/scrollup/ScrollUp';


const App = () => {
  return (
<>

<Header/>


<main className='main'>

<Home/>
<About/>
<Skill/>
<Service/>
<Qualification/>
<Testimonials/>
<Contact/>
  </main>
<Footer/>
<ScrollUp/>

</>
  )
}

export default App
