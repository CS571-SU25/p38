import React, { useState, useEffect } from 'react';
import { Container, Card, Button, ListGroup } from 'react-bootstrap';

const volunteerRoles = [
  {
    id: 'water-station',
    name: 'Water Station Helper',
    description: 'Distribute water and cheer on runners at designated water stations.',
  },
  {
    id: 'registration',
    name: 'Registration Desk',
    description: 'Help check in runners and volunteers before the race starts.',
  },
  {
    id: 'course-marshall',
    name: 'Course Marshall',
    description: 'Guide runners along the race course and ensure safety.',
  },
];

export default function VolunteerPage() {
  const [selectedRole, setSelectedRole] = useState(null);

  useEffect(() => {
    const savedRole = localStorage.getItem('volunteerRole');
    if (savedRole) setSelectedRole(savedRole);
  }, []);

  function handleSelectRole(roleId) {
    setSelectedRole(roleId);
    localStorage.setItem('volunteerRole', roleId);
  }

  return (
    <Container className="my-4">
      <h2>Your Volunteer Role</h2>
      {selectedRole ? (
        <Card>
          <Card.Body>
            <Card.Title>
              {volunteerRoles.find((r) => r.id === selectedRole)?.name}
            </Card.Title>
            <Card.Text>
              {volunteerRoles.find((r) => r.id === selectedRole)?.description}
            </Card.Text>
            <Button variant="secondary" onClick={() => handleSelectRole(null)}>
              Change Role
            </Button>
          </Card.Body>
        </Card>
      ) : (
        <>
          <p>Please select a volunteer role:</p>
          <ListGroup>
            {volunteerRoles.map((role) => (
              <ListGroup.Item
                key={role.id}
                action
                onClick={() => handleSelectRole(role.id)}
              >
                <strong>{role.name}</strong> — {role.description}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </>
      )}
    </Container>
  );
}
