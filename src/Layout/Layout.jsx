import React from 'react'
import Header from '../assets/Components/Header/Header'
import Footer from '../assets/Components/Footer/Footer'

function Layout({ children }) {
    return (
        <>
            <Header />
            <main style={{ paddingTop: '80px' }}>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout
