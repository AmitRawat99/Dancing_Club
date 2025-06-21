import React from 'react'
import Banners from '../../share/Banners'
import backgroundImg from '../../Images/club_background.webp'
import { Col, Container, Row, Form } from 'react-bootstrap'
import '../../../style/Form.scss'

function Guest() {
  return (
    <>
      <Banners
        backgroundImage={backgroundImg}
        children={"GUESTLIST"}
        section={"Guest List"}
        gradient={true}
      />

      <Container>
        <Row>
          <Col>
            <div className="form_container">
              <div className="form_title">
                <h1>Guest Infomation</h1>
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
                      <Form.Label>Guestlist Date</Form.Label>
                      <Form.Control type='datetime-local' />
                    </Form.Group>
                  </Col>
                  <Col lg={6}>

                    <Form.Group className="mb-3">
                      <Form.Label>Date of Birth</Form.Label>
                      <Form.Control type='date' />
                    </Form.Group>
                  </Col>
                </Row>

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

export default Guest
