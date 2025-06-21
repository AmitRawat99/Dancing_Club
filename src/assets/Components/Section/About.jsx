import React, { useEffect, useState } from 'react'
import '../../../style/About.scss'
import { Col, Container, Row } from 'react-bootstrap'
import AboutImg from '../../Images/about.webp'
import { GiJugglingClubs } from "react-icons/gi";


function About() {

  const paginations = [1, 2, 3]
  const [active, setActive] = useState(1)

  const aboutDescriptions = [
    {
      aboutTitle: "We Bring the Party to Life",
      aboutDescription:
        "Step into a world where the beats never stop and the energy is contagious. Our club experience is crafted to ignite your passion for dance and music. Whether you're here to groove to the latest hits or just soak in the vibrant atmosphere, our space invites you to laugh, connect, and create unforgettable memories. From expertly mixed tracks by world-class DJs to electrifying light shows, every night is an immersive celebration of life, rhythm, and unity. Join us as we redefine nightlife and bring the party to life like never before."
    },
    {
      aboutTitle: "Feel the Rhythm, Own the Night",
      aboutDescription:
        "Our DJs curate the ultimate soundtrack to your night, spinning a diverse mix of genres from hip-hop and EDM to classic house and deep techno. Each set is tailored to elevate your experience, keeping the dance floor alive and your spirits soaring. Beyond music, our club embraces a culture of freedom and expression — a place where you can truly be yourself, surrounded by like-minded enthusiasts who share your love for the beat. Come lose yourself in the rhythm, own the night, and make every moment count in a place where music and passion collide."
    },
    {
      aboutTitle: "Experience Club Culture Like Never Before",
      aboutDescription:
        "Our venue combines state-of-the-art sound systems, mesmerizing light installations, and an ambiance that captivates all your senses. Every detail, from the layout to the vibe, is designed to foster connection and celebration. Whether you’re a seasoned clubber or new to the scene, you’ll find a welcoming community ready to embrace you. Dance under shimmering lights, enjoy handcrafted cocktails from our expert bartenders, and immerse yourself in a culture that champions creativity, inclusivity, and joy. This is more than just a club — it’s a sanctuary for those who live to celebrate life through music."
    }
  ];


  const [ShowContent, setShowContent] = useState(aboutDescriptions[0])


  useEffect(() => {
    setShowContent(aboutDescriptions[0])
  }, [])


  const ShowContents = (pageNumber) => {
    setActive(pageNumber)
    const index = pageNumber - 1
    console.log(index);

    const selectContent = aboutDescriptions[index]
    if (selectContent) {
      setShowContent(selectContent)
    }
    else {
      setShowContent(null)
    }
  }


  return (
    <>
      <Container>
        <div className="About_section">
          <div className="about_content">
            <GiJugglingClubs />
            <h2>About Our Club</h2>
            <p>At <span>WE CAN DANCE FOREVER</span> we believe the night is just the beginning. Our club is a sanctuary for music lovers, dancers, and dreamers who live for the rhythm and move with the moment. With high-energy beats, immersive lighting, and a crowd that never stops, we turn every night into a celebration of freedom, connection, and endless movement. Step inside, feel the pulse—and dance like forever means tonight....</p>
          </div>
          <div className="about_details">
            {ShowContent && (
              <div>
                <h2>{ShowContent.aboutTitle}</h2>
                <p>{ShowContent.aboutDescription}</p>
              </div>
            )}

            <div className="pagination_section">
              {
                paginations.map((line, idx) => (
                  <span className={`${active === line ? "activeBtn" : "nonActive"}`} onClick={() => ShowContents(line)} key={idx}>
                    {line}
                  </span>
                ))
              }
            </div>
          </div>

        </div>

      </Container>
    </>
  )
}

export default About