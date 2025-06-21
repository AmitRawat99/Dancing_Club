import React from 'react'
import { Container } from 'react-bootstrap'
import '../../style/Banner.scss'
import { IoHome } from "react-icons/io5";
import { Link } from 'react-router-dom';


function Banners({ children, backgroundImage, icon, section, gradient = true }) {

    const aboutBanner = {
        width: "100%",
        height: "300px",
        backgroundImage: gradient
            ? `linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.1)), url(${backgroundImage})`
            : `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }


    return (
        <>
            <Container>
                <div className="aboutus_banner" style={aboutBanner}>
                    <div className="aboutus_content">
                        <h1>{children}</h1>
                        <div className="aboutus_url flex  items-center ">
                            {icon}
                            <p><Link to={'/'}>Home</Link> /  {section}</p>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Banners