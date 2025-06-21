import React from 'react'
import Banners from '../../share/Banners'
import backgroundImg from '../../Images/table_banner.webp'
import { Col, Container, Row, Form } from 'react-bootstrap'
import '../../../style/Form.scss'
import { Link } from 'react-router-dom'
import clube1 from '../../Images/club1.webp'
import clube2 from '../../Images/club4.webp'
import clube3 from '../../Images/club5.webp'

import img1 from '../../Images/party_club/1 (1).webp'
import img2 from '../../Images/party_club/1 (2).webp'
import img3 from '../../Images/party_club/1 (3).webp'
import img4 from '../../Images/party_club/1 (4).webp'
import img5 from '../../Images/party_club/1 (5).webp'
import img6 from '../../Images/party_club/1 (6).webp'

function Functions() {


    const BannerImg = [img1, img2, img3, img4, img5]

    const functionDetails = [
        {
            functionTitle: "Full Venue",
            functionDescription: "Hire our entire venue for an unforgettable event. With modern design, top-tier sound, and lighting, it's perfect for corporate functions, private parties, or special celebrations.",
            functionBtn: "Enquire",
        },
        {
            functionTitle: "VIP Room / Bar",
            functionDescription: "An intimate, stylish space with its own bar and premium seating. Ideal for private groups seeking a luxurious, exclusive experience.",
            functionBtn: "Enquire",
        },
        {
            functionTitle: "Booths / Tables",
            functionDescription: "Reserve a VIP booth for bottle service and enjoy the night in comfort and style. Perfect for birthdays, celebrations, or a luxury night out.",
            functionBtn: "Enquire",
        }
    ];


    const BackgruondImg1 = {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${clube1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }
    const BackgruondImg2 = {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${clube2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }
    const BackgruondImg3 = {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${clube3})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }

    return (
        <>
            <Banners
                backgroundImage={backgroundImg}
                children={"Functions"}
                section={"Function"}
                gradient={true}
            />
            <Container>

                <div className="function_party_images mt-5 mb-3">
                    <div className="party_container flex">
                                {BannerImg.map((item, idx) => {
                                    return (
                                        <img src={item} alt="" />
                                    )
                                })}
                    </div>
                </div>

                <div className="function_containers mb-5">
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
                                                <Link to={'/Dancing_Club/contact'} className="btn-link">
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

export default Functions