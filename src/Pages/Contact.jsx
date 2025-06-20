import React from 'react'
import '../style/Contact.scss'
import { Col, Container, Form, Row } from 'react-bootstrap'

function Contact() {
    return (
        <>
            <Container>
                <div className="contact_container">
                    <div className="contact_section">
                        <div className="contact_titles">
                            <h2>Contact us</h2>
                            <p>Have questions, want to book a table, or need more info? We’re here to help! Reach out anytime and let’s make your night at WE CAN DANCE FOREVER unforgettable...</p>
                        </div>
                    </div>
                </div>
                <div className="inputs_container">
                    <Form>
                        <Row>
                            <Col lg={4}>
                                <Form.Group>
                                    <Form.Control type='text' placeholder='Name'></Form.Control>
                                </Form.Group>
                            </Col>
                            <Col lg={4}>
                                <Form.Group>
                                    <Form.Control type='email' placeholder='Email'></Form.Control>
                                </Form.Group>
                            </Col>
                            <Col lg={4}>
                                <Form.Group>
                                    <Form.Control type='number' placeholder='Phone Number'></Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4}>
                                <Form.Group>
                                    <select name="" id="">
                                        <option value="Corporate Events">Corporate Events</option>
                                        <option value="Birthday Parties">Birthday Parties</option>
                                        <option value="Social Gatherings">Social Gatherings</option>
                                        <option value="Live Entertainment">Live Entertainment</option>
                                        <option value="Networking Events">Networking Events</option>
                                        <option value="Custom Events">Custom Events</option>
                                    </select>
                                </Form.Group>
                            </Col>
                            <Col lg={4}>
                                <Form.Group>
                                    <Form.Control type='date' placeholder='Date'></Form.Control>
                                </Form.Group>
                            </Col>
                            <Col lg={4}>
                                <Form.Group>
                                    <Form.Control placeholder='Number of Guest' type='number'></Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12}>
                                <Form.Group>
                                    <Form.Control as="textarea" rows={8} placeholder='Comment' type='text'></Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12}>
                                <Form.Group className='check-now-btn mt-5'>
                                    <button className='check_btn'>Book Now</button>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </Container>
        </>
    )
}

export default Contact