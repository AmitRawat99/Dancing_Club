import React from 'react'
import Banner from '../assets/Components/Section/Banner'
import About from '../assets/Components/Section/About'
import Our_Services from '../assets/Components/Section/Our_Services'
import Gallary from '../assets/Components/Section/Gallary'
import Contact from './Contact'

function Home() {
    return (
        <>
            <Banner />
            <About />
            <Our_Services/>
            <Gallary/>
            <Contact/>
        </>
    )
}

export default Home