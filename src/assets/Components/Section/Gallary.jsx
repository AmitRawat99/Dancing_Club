import React from 'react'
import '../../../style/Gallary.scss'

import img1 from '../../Images/gallary/1 (1).webp'
import img2 from '../../Images/gallary/1 (2).webp'
import img3 from '../../Images/gallary/1 (3).webp'
import img4 from '../../Images/gallary/1 (4).webp'
import img5 from '../../Images/gallary/1 (5).webp'
import img6 from '../../Images/gallary/1 (6).webp'
import img7 from '../../Images/gallary/1 (7).webp'
import img8 from '../../Images/gallary/1 (8).webp'
import img9 from '../../Images/gallary/1 (9).webp'
import img10 from '../../Images/gallary/1 (10).webp'
import img11 from '../../Images/gallary/1 (11).webp'


import { Container } from 'react-bootstrap'

function Gallary() {
    const images = [img5 , img2, img1 , img3, img4 , img6, img7, img8,img11, img9, img10 ];

    return (
        <>
            <Container>
                <div className="product_main_title">
                    <h1 className='product_title'>Gallery</h1>
                    <p>Check out the best moments from the dance floor, the coolest vibes in the house, and the unforgettable energy that keeps us dancing all night long.</p>
                </div>
                <div className="masonry-gallery">
                    {images.map((img, index) => (
                        <div key={index} className="masonry-item">
                            <img src={img} alt={`Gallery ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </Container>

        </>
    );
}

export default Gallary