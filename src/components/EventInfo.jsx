import React from 'react';
import { Container } from 'react-bootstrap';

export default function RaceInfo() {
  return (
    <Container className="my-4" style={{ maxWidth: '600px' }}>
      <h2 className="mb-3">About the Race</h2>
      <ul className="list-group mb-3">
        <li className="list-group-item">1K - For Kids</li>
        <li className="list-group-item">5K - Walk or Run</li>
        <li className="list-group-item">10K - Competitive</li>
      </ul>
      <p><strong>Location:</strong> Hope Park, Madison, WI</p>
      <p><strong>Date:</strong> September 1, 2025</p>
      <p><strong>Top Runners 2024:</strong> Jane D. (5K, 19:23), Sam L. (10K, 38:02)</p>
    </Container>
  );
}
