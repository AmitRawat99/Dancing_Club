import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../../../style/Header.scss'
import { Link } from 'react-router-dom'

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="site-header">
            <div className="header_container">
                <Container>
                    <Row>
                        <Col>
                            <div className="header_section flex justify-between items-center">
                                <div className="logo">
                                    <h2><Link to="/">Club Logo</Link></h2>
                                </div>

                                {/* Hamburger Icon */}
                                <div className="menu_toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                    <span className="bar"></span>
                                    <span className="bar"></span>
                                    <span className="bar"></span>
                                </div>

                                {/* Navigation Menu */}
                                <ul className={`all_menus ${isMenuOpen ? 'open' : ''} flex list-none items-center gap-5`}>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/reservation">Reservation</Link></li>
                                    <li><Link to="/resort">Resort</Link></li>
                                    <li><Link to="/service">Services</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </header>
    )
}

export default Header
