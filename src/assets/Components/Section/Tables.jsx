import React from 'react'
import Banners from '../../share/Banners'
import backgroundImg from '../../Images/table_banner.webp'
import { Col, Container, Row, Form } from 'react-bootstrap'
import '../../../style/Form.scss'
import { Link } from 'react-router-dom'
import clube1 from '../../Images/club1.webp'
import clube2 from '../../Images/club2.webp'
import clube3 from '../../Images/club3.webp'

function Tables() {


const functionDetails = [
    {
        functionTitle: "PRIVATE BOOTHS",
        functionDescription: "For an unforgettable night out, our private booths offer the ultimate VIP experience. Enjoy an exclusive space for you and your guests, with luxurious seating, a dedicated waitress ensuring your every need is met, and priority bottle service. Whether it's a celebration or just a special evening, a private booth guarantees privacy, comfort, and a premium nightlife vibe tailored just for your group.",
        functionBtn: "Booking Now",
    },
    {
        functionTitle: "BOTTLES",
        functionDescription: "Indulge in your favorite premium spirits with our curated bottle service menu. Choose from a wide selection of top-shelf liquors, champagne, and specialty drinks. If you have a special request that isn’t listed, just let us know — we’ll do our best to get it for you. Bottle service is not just about the drink; it’s about the experience — dramatic presentations, personalized service, and that unforgettable feeling of being celebrated.",
        functionBtn: "View Menu",
    }
];



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

    return (
        <>
            <Banners
                backgroundImage={backgroundImg}
                children={"Table Booking"}
                section={"Table Booking"}
                gradient={true}
            />
            <Container>
                <div className="function_containers">
                    <Row>
                        {
                            functionDetails.map((item, idx) => {
                                const bgImage = idx == 0 ? BackgruondImg1 : idx === 1 ? BackgruondImg2 : BackgruondImg3;
                                return (
                                    <Col lg={6} key={idx}>
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

            <Container>
                <Row>
                    <Col>
                        <div className="form_container">
                            <div className="form_title">
                                <h1>Booking Now</h1>
                            </div>
                            <Form>

                                {/* One Row, Two Inputs */}
                                <Row>
                                    <Col lg={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>First Name</Form.Label>
                                            <Form.Control placeholder='User First Name' type='text' />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Last Name</Form.Label>
                                            <Form.Control placeholder='User Last Name' type='text' />
                                        </Form.Group>
                                    </Col>
                                </Row>


                                <Row>
                                    <Col lg={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control placeholder='User Email' type='email' />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6}>

                                        <Form.Group className="mb-3">
                                            <Form.Label>Phone Number</Form.Label>
                                            <Form.Control placeholder='9098767876' type='tel' />
                                        </Form.Group>

                                    </Col>
                                </Row>


                                <Row>
                                    <Col lg={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Booking Date</Form.Label>
                                            <Form.Control type='datetime-local' />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Occasion</Form.Label>
                                            <Form.Select>
                                                <option value="Birthday">Birthday</option>
                                                <option value="Night Out With The Crew">Night Out With The Crew</option>
                                                <option value="Work Celebration">Work Celebration</option>
                                                <option value="Hens">Hens</option>
                                                <option value="Other">Other</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col lg={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Group Size</Form.Label>
                                            <Form.Control type='number' value={1} />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Table Service Budget</Form.Label>
                                            <Form.Select>
                                                <option value="1500">$1500 - $2000</option>
                                                <option value="2000">$2000 - $3000</option>
                                                <option value="3000">$3000 - 4000</option>
                                                <option value="4000">$4000 - $5000</option>
                                                <option value="5000">$5000+</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>


                                <Form.Group className="mb-3">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" rows={5} placeholder='Message' />
                                </Form.Group>

                                <div className="submit_btn mt-5 m-auto">
                                    <button className='check_btn'>Submit</button>
                                </div>

                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Tables