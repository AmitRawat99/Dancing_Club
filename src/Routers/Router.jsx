import React from 'react'
import Layout from '../Layout/Layout'
import Home from '../Pages/Home'
import { Route, Routes } from 'react-router-dom'
import Contact from '../Pages/Contact'
import Resort from '../Pages/Resort'
import About from '../Pages/AboutUs'
import Our_Services from '../assets/Components/Section/Our_Services'
import Reservation from '../Pages/Reservation'

function Router() {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/resort' element={<Resort />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/reservation' element={<Reservation/>} />
                    <Route path='/service' element={<Our_Services/>} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </Layout>
        </>
    )
}

export default Router