import React from 'react';
import { Container } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer
      className="text-center py-3 mt-auto"
      style={{ backgroundColor: '#f8f9fa', borderTop: '1px solid #dee2e6' }}
    >
      <Container>
        <small>
          &copy; {new Date().getFullYear()} Race for Change. All rights reserved.
        </small>
      </Container>
    </footer>
  );
}
