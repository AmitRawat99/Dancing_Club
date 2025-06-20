import React from 'react'
import '../../../style/Footer.scss'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
    return (
        <>
            <Container fluid>

                <div className="footer_section">
                    <Container >
                        <p>© 2024 Club All Rights Reserved.</p>
                    </Container>
                </div>
            </Container>
        </>
    )
}

export default Footer