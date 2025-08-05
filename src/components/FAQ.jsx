import React from 'react';
import { Accordion, Container } from 'react-bootstrap';

export default function FAQ() {
  return (
    <Container className="my-4">
      <h2>Frequently Asked Questions</h2>
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Can I walk the 5K?</Accordion.Header>
          <Accordion.Body>
            Yes! Walkers are welcome and encouraged.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Can I donate without running?</Accordion.Header>
          <Accordion.Body>
            Absolutely. All contributions are welcome and appreciated.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Is there parking at the venue?</Accordion.Header>
          <Accordion.Body>
            Yes, free parking is available near Hope Park on race day.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}
