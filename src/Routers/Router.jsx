import React from 'react'
import Layout from '../Layout/Layout'
import Home from '../Pages/Home'
import { Route, Routes } from 'react-router-dom'
import Contact from '../Pages/Contact'
import Resort from '../Pages/Resort'
import About from '../Pages/AboutUs'
import Our_Services from '../assets/Components/Section/Our_Services'
import Reservation from '../Pages/Reservation'
import Guest from '../assets/Components/Section/Guest'
import Tables from '../assets/Components/Section/Tables'
import Functions from '../assets/Components/Section/Functions'

function Router() {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path='/Dancing_Club/' element={<Home />} />
                    <Route path='/Dancing_Club/resort' element={<Resort />} />
                    <Route path='/Dancing_Club/about' element={<About />} />
                    <Route path='/Dancing_Club/reservation' element={<Reservation/>} />
                    <Route path='/Dancing_Club/service' element={<Our_Services/>} />
                    <Route path='/Dancing_Club/guest-list' element={<Guest/>} />
                    <Route path='/Dancing_Club/functions' element={<Functions/>} />
                    <Route path='/Dancing_Club/table' element={<Tables/>} />
                    <Route path='/Dancing_Club/contact' element={<Contact />} />
                </Routes>
            </Layout>
        </>
    )
}

export default Router