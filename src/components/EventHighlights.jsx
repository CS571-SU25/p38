import React from 'react';

// Test images
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
    <section>
      <h2>Event Highlights</h2>
      <div style={{ display: 'flex', gap: '20px' }}>
        {highlights.map(({ id, img, caption }) => (
          <div key={id} style={{ maxWidth: '200px' }}>
            <img src={img} alt={caption} style={{ width: '100%', borderRadius: '8px' }} />
            <p>{caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
