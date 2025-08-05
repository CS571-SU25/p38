import React, { useState, useContext } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';

export default function SignupForm() {
  const [form, setForm] = useState({ name: '', role: 'runner', raceLength: '' });
  const [validated, setValidated] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const { updateUser } = useContext(UserContext);

  function handleChange(e) {
    const { name, value } = e.target;
    if (name === 'role' && value === 'volunteer') {
      setForm((prev) => ({ ...prev, role: value, raceLength: '' }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (form.name.trim() === '') {
      setValidated(true);
      return;
    }
    setValidated(false);

    updateUser(form.name.trim(), form.role);
    setShowModal(true);
  }

  return (
    <>
      <Form className="p-4" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control 
            type="text" 
            name="name" 
            placeholder="Enter name" 
            value={form.name}
            onChange={handleChange}
            isInvalid={validated && form.name.trim() === ''}
          />
          <Form.Control.Feedback type="invalid">
            Please enter a name.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Role</Form.Label>
          <Form.Select name="role" value={form.role} onChange={handleChange}>
            <option value="runner">Runner</option>
            <option value="volunteer">Volunteer</option>
          </Form.Select>
        </Form.Group>

        {form.role === 'runner' && (
          <Form.Group className="mb-3">
            <Form.Label>Race Length</Form.Label>
            <Form.Select
              name="raceLength"
              value={form.raceLength}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select a race length</option>
              <option value="1K">1K - For Kids</option>
              <option value="5K">5K - Walk or Run</option>
              <option value="10K">10K - Competitive</option>
            </Form.Select>
          </Form.Group>
        )}

        <Button variant="primary" type="submit">Submit</Button>
      </Form>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Successfully Signed Up!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Thank you, <strong>{form.name}</strong>, for signing up as a <strong>{form.role}</strong>.
          </p>
          {form.role === 'runner' && (
            <p>
              You have registered for the <strong>{form.raceLength}</strong> race.
            </p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              setShowModal(false);
              setForm({ name: '', role: 'runner', raceLength: '' });
              navigate(form.role === 'volunteer' ? '/volunteer' : '/');
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
