import React from 'react'
import { Container, Accordion, Row, Col } from 'react-bootstrap'
import img1 from '../Images/accordion/accordion1.webp'
import img2 from '../Images/accordion/accordion2.webp'
import img3 from '../Images/accordion/accordion3.webp'
import '../../style/Accordion.scss'

function Accordions() {
  return (
    <>
      <Container>
        <div className="accordion_container flex justify-between">

          {/* Image Section */}

          <div className="accordion_group">
            <div className="accordion_images">
              <img src={img1} alt="Club vibe" />
              <div className="sub_imgs">
                <img src={img2} alt="" />
              </div>
              <div className="sub_imgs1">
                <img src={img3} alt="" />
              </div>
            </div>
          </div>

          {/* FAQ Accordion Section */}

          <div className="accordtion_faq">
            <h1 className="accordion_title">Before You Hit the Dance Floor</h1>
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>What are your opening hours?</Accordion.Header>
                <Accordion.Body>
                  We’re open every Friday to Sunday from 8 PM till 4 AM.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>Is there a dress code?</Accordion.Header>
                <Accordion.Body>
                  Yes — stylish and trendy. No flip-flops, athletic wear, or beachwear.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>Do I need to book in advance?</Accordion.Header>
                <Accordion.Body>
                  Booking a table in advance is recommended for groups or special nights.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>Do I need to book in advance?</Accordion.Header>
                <Accordion.Body>
                  Booking a table in advance is recommended for groups or special nights.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                <Accordion.Header>Do I need to book in advance?</Accordion.Header>
                <Accordion.Body>
                  Booking a table in advance is recommended for groups or special nights.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="5">
                <Accordion.Header>Do I need to book in advance?</Accordion.Header>
                <Accordion.Body>
                  Booking a table in advance is recommended for groups or special nights.
                </Accordion.Body>
              </Accordion.Item>


            </Accordion>
          </div>

        </div>
      </Container>
    </>
  )
}

export default Accordions
