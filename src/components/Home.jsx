import React from 'react';
import CountdownTimer from './CountdownTimer';
import { Container } from 'react-bootstrap';

export default function Home() {
  return (
    <Container className="mt-4">
      <h1>Welcome to Race for Change</h1>
      <p>Join us in running for a better future. Whether you're running, volunteering, or donating, your impact matters.</p>
    </Container>
  );
}