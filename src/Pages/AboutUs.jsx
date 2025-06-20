import React from 'react'
import About from '../assets/Components/Section/About'
import { Container } from 'react-bootstrap'
import '../style/About.scss'
import { IoHome } from "react-icons/io5";
import { Link } from 'react-router-dom'
import Banners from '../assets/share/Banners';
import aboutBanner from '../assets/Images/about_banner.webp'
import Accordion from '../assets/share/Accordions';

function AboutUs() {
  return (
    <>
      <Banners gradient={true} children={"Your Ultimate Dance Destination"} aboutBanner={aboutBanner} icon={IoHome} section={"About Us"} />
      <About />
      <Accordion/>
    </>
  )
}

export default AboutUs