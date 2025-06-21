import React, { useEffect, useState } from 'react';
import '../../../style/Footer.scss';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa6";
import { FaTwitter, FaWhatsapp } from "react-icons/fa";
import { IoMdArrowRoundUp } from "react-icons/io";

function Footer() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            <Container fluid>
                <div className="footer_section mt-5">
                    <Container>
                        <Row>
                            <Col lg={3} md={4} sm={6}>
                                <div className="footer_content">
                                    <div className="footer_details">
                                        <h1>Stay Connected</h1>
                                        <div className="footer_sub">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, dolore.</p>
                                        </div>
                                        <div className="footer_section_icon d-flex gap-3">
                                            <FaFacebookF />
                                            <FaTwitter />
                                            <FaInstagram />
                                            <FaGithub />
                                        </div>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={3} md={4} sm={6}>
                                <div className="footer_content">
                                    <div className="footer_details">
                                        <h1>Quick Links</h1>
                                        <ul className="footer_list">
                                            <li><a href="/Dancing_Club/">Home</a></li>
                                            <li><a href="/Dancing_Club/about">About</a></li>
                                            <li><a href="/Dancing_Club/reservation">Reservation</a></li>
                                            <li><a href="/Dancing_Club/resort">Resort</a></li>
                                            <li><a href="/Dancing_Club/service">Services</a></li>
                                            <li><a href="/Dancing_Club/contact">Contact</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={3} md={4} sm={6}>
                                <div className="footer_content">
                                    <div className="footer_details">
                                        <h1>Our Services</h1>
                                        <ul className="footer_list">
                                            <li><a href="#">Birthday Parties</a></li>
                                            <li><a href="#">Corporate Events</a></li>
                                            <li><a href="#">Social Gatherings</a></li>
                                            <li><a href="#">Live Entertainment</a></li>
                                            <li><a href="#">Networking Events</a></li>
                                            <li><a href="#">Custom Events</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={3}>
                                <div className="footer_content">
                                    <div className="footer_details">
                                        <h1>Contact</h1>
                                        <div className="footer_list">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                            <p>Call : <a href="tel:+918787678765">+918787678765</a></p>
                                            <p>Email : <a href="mailto:supportshop2123@gmail.com">supportshop2123@gmail.com</a></p>
                                        </div>
                                    </div>
                                </div>
                            </Col>

                            <Row className="footer_bottom mt-4 text-center">
                                <Col lg={12}>
                                    <p>&copy; {new Date().getFullYear()} Dancing Club. All rights reserved.</p>
                                </Col>
                            </Row>
                        </Row>
                    </Container>
                </div>

                <div className="footer_icon">
                    <FaWhatsapp />
                </div>

                {isVisible && (
                    <div className="footer_arrow" onClick={scrollToTop} title="Go to top">
                        <IoMdArrowRoundUp />
                    </div>
                )}
            </Container>
        </>
    );
}

export default Footer;
