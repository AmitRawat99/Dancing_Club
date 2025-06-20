import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../../../style/Services.scss'
import { FaGlassCheers, FaBirthdayCake, FaUsers, FaMusic, FaHandshake, FaRegSmile } from 'react-icons/fa';

function Our_Services() {

    const OurServices = [
        {
            icon: <FaGlassCheers />,
            title: "Corporate Events",
            description: "Tailored event solutions for conferences, meetings, and company celebrations with professional execution.",
        },
        {
            icon: <FaBirthdayCake />,
            title: "Birthday Parties",
            description: "Stylish, themed birthday experiences for all ages, complete with décor, entertainment, and more.",
        },
        {
            icon: <FaUsers />,
            title: "Social Gatherings",
            description: "Beautifully organized parties and get-togethers designed for unforgettable moments with loved ones.",
        },
        {
            icon: <FaMusic />,
            title: "Live Entertainment",
            description: "Engaging live music, DJs, and performances curated to match your event’s energy and theme.",
        },
        {
            icon: <FaHandshake />,
            title: "Networking Events",
            description: "Professional yet welcoming environments designed to foster real connections and industry growth.",
        },
        {
            icon: <FaRegSmile />,
            title: "Custom Events",
            description: "Unique, fully personalized events built from your ideas, vision, and creative inspiration.",
        },
    ];

    return (
        <>
            <Container>
                <div className="our_services">
                    <div className="our_service_title">
                        <h2 className="service_title">Our Services</h2>
                        <p>Rem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    </div>
                </div>
                <div className="services_cards">
                    <Container>
                        <Row>
                            {OurServices.map((line, idx) => (
                                <Col lg={4} key={idx}>
                                    <div className="service_details">
                                        <div className="service_icon">
                                            {line.icon}
                                        </div>
                                        <div className="service_icon_details">
                                            <h1>{line.title}</h1>
                                            <p>{line.description}</p>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </div>
            </Container>
        </>
    )
}

export default Our_Services