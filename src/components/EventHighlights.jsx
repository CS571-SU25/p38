import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import photo1 from '../assets/photo1.jpg';
import photo2 from '../assets/photo2.jpg';
import photo3 from '../assets/photo3.jpg';

export default function EventHighlights() {
  const highlights = [
    { id: 1, img: photo1, caption: "2024 5K Winner Jane Doe - 19:23" },
    { id: 2, img: photo2, caption: "Start line excitement" },
    { id: 3, img: photo3, caption: "Volunteers cheering runners" },
  ];

  return (
    <Container className="my-4">
      <h2>Event Highlights</h2>
      <Carousel>
        {highlights.map(({ id, img, caption }) => (
          <Carousel.Item key={id}>
            <img
              className="d-block w-100"
              src={img}
              alt={caption}
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '350px',
                objectFit: 'contain',
                borderRadius: '8px',
              }}
            />
            <div
              style={{
                marginTop: '0.5rem',
                color: '#333',
                fontWeight: '500',
                fontSize: '1rem',
                textAlign: 'center',
              }}
            >
              {caption}
            </div>
          </Carousel.Item>


        ))}
      </Carousel>
    </Container>
  );
}
