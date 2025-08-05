import React, { useState, useEffect } from 'react';
import { Container, Card, ProgressBar, Button, Modal, Form, Alert } from 'react-bootstrap';

export default function DonationTracker() {
  const goal = 5000;

  const [total, setTotal] = useState(() => {
    const saved = localStorage.getItem('donationTotal');
    return saved ? parseFloat(saved) : 3542;
  });
  const progress = Math.min((total / goal) * 100, 100);

  const [showModal, setShowModal] = useState(false);
  const [amount, setAmount] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    localStorage.setItem('donationTotal', total.toString());
  }, [total]);

  function handleDonateClick() {
    setShowModal(true);
    setAmount('');
    setCardNumber('');
    setError('');
  }

  function handleSubmit(e) {
    e.preventDefault();
    const numericAmount = parseFloat(amount);

    if (isNaN(numericAmount) || numericAmount <= 0) {
      setError('Please enter a valid positive donation amount.');
      return;
    }

    if (!cardNumber.trim() || cardNumber.trim().length < 12) {
      setError('Please enter a valid credit card number.');
      return;
    }

    setTotal((prevTotal) => prevTotal + numericAmount);
    setShowModal(false);
  }

  return (
    <Container className="my-4" style={{ maxWidth: '600px' }}>
      <Card className="p-4 shadow-sm">
        <Card.Title className="text-center mb-3">
          Total Raised: ${total.toLocaleString()}
        </Card.Title>
        <ProgressBar now={progress} label={`${progress.toFixed(0)}%`} className="mb-3" />
        <Card.Text className="text-center mb-4">
          Help us reach our goal of ${goal.toLocaleString()}!
        </Card.Text>
        <div className="d-flex justify-content-center">
          <Button variant="success" onClick={handleDonateClick}>
            Donate Now
          </Button>
        </div>
      </Card>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Make a Donation</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            {error && <Alert variant="danger">{error}</Alert>}

            <Form.Group className="mb-3" controlId="donationAmount">
              <Form.Label>Donation Amount ($)</Form.Label>
              <Form.Control
                type="number"
                min="1"
                step="0.01"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                required
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="cardNumber">
              <Form.Label>Credit Card Number</Form.Label>
              <Form.Control
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                placeholder="Enter credit card number"
                required
              />
              <Form.Text className="text-muted">
                This is a dummy field — no real payment will be processed.
              </Form.Text>
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Cancel
            </Button>
            <Button variant="success" type="submit">
              Donate
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Container>
  );
}
