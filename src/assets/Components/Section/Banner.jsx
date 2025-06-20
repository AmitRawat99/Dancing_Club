import React from 'react'
import '../../../style/Banner.scss'
import { Col, Container, Row } from 'react-bootstrap'

function Banner() {
    return (
        <>
            <Container fluid>
                <div className="Banner_section">
                    <div className="Banner_content">
                        <h1>WE CAN DANCE FOREVER</h1>
                        <p>Turn up the beat and lose yourself in the moment. With every step, we write a story of joy, connection, and pure adrenaline. When we dance, time doesn't matter—because forever starts on the dance floor....</p>
                        <button className='check_btn'>See Our Events</button>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Banner