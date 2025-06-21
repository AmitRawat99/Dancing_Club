import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../style/OurFunctions.scss'
import clube1 from '../Images/club1.webp'
import clube2 from '../Images/club2.webp'
import clube3 from '../Images/club3.webp'
import { Link } from 'react-router-dom'

function Our_Functions() {

    const functionDetails = [
        {
            functionTitle: "GUESTLIST",
            functionDescription: "Get ahead of the crowd and enhance your night by joining our exclusive guestlist, ensuring faster entry, smoother access, and a premium nightlife experience from the moment you arrive.",
            functionBtn: "Submit",
            functionLink: "/Dancing_Club/guest-list"
        },
        {
            functionTitle: "TABLES",
            functionDescription: "Reserve a VIP table and enjoy the ultimate club experience with your own private section, a personal waitress attending to your every need, and dramatic bottle service presentations that make every moment unforgettable.",
            functionBtn: "Booking Now",
            functionLink: "/Dancing_Club/table"
        },
        {
            functionTitle: "FUNCTIONS",
            functionDescription: "Whether you're planning a corporate party, brand activation, birthday celebration, or a themed event like a casino royale night, our venue offers full support, stylish spaces, and everything you need to throw a spectacular, custom-tailored event.",
            functionBtn: "Enquiry",
            functionLink: "/Dancing_Club/functions"
        }
    ]


    const BackgruondImg1 = {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${clube1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }
    const BackgruondImg2 = {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${clube3})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }
    const BackgruondImg3 = {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${clube2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }


    return (
        <>
            <Container>
                <div className="function_container">
                    <div className="function_section_title">
                        <h1>Our Functions </h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. illo officiis maxime doloremque praesentium voluptatibus cum expedita unde consequatur laborum quae.</p>
                    </div>
                    <Row>
                        {
                            functionDetails.map((item, idx) => {
                                const bgImage = idx == 0 ? BackgruondImg1 : idx === 1 ? BackgruondImg2 : BackgruondImg3;
                                return (
                                    <Col lg={4} key={idx}>
                                        <div className="functins_cards" style={bgImage} >
                                            <div className="function_title">
                                                <h2>{item.functionTitle}</h2>
                                            </div>
                                            <div className="function_description">
                                                <p>{item.functionDescription}</p>
                                            </div>
                                            <div className="function_button">
                                                <Link to={item.functionLink} className="btn-link">
                                                    <button>{item.functionBtn}</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </div>
            </Container>
        </>
    )
}

export default Our_Functions