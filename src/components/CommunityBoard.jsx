import React, { useEffect, useState } from 'react';
import { Button, Card, Form, Nav, Container, Modal } from 'react-bootstrap';

const CHATROOMS = ['General', 'Preparation', 'Volunteers'];

function getUserId() {
  let id = localStorage.getItem('userId');
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem('userId', id);
  }
  return id;
}

export default function CommunityBoard() {
  const [username, setUsername] = useState(localStorage.getItem('username') || '');
  const [showNameModal, setShowNameModal] = useState(!username);

  const userId = getUserId();

  const [activeRoom, setActiveRoom] = useState(CHATROOMS[0]);
  const [thought, setThought] = useState('');
  const [comments, setComments] = useState({});

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('community-comments')) || {};
    setComments(stored);
  }, []);

  function saveToStorage(updated) {
    localStorage.setItem('community-comments', JSON.stringify(updated));
  }

  function handlePost(e) {
    e.preventDefault();
    if (!thought.trim()) return;

    const newComment = {
      id: crypto.randomUUID(),
      comment: thought.trim(),
      created: new Date().toISOString(),
      userId,
      username,
    };

    const updatedRoomComments = comments[activeRoom]
      ? [...comments[activeRoom], newComment]
      : [newComment];

    const updatedComments = { ...comments, [activeRoom]: updatedRoomComments };

    setComments(updatedComments);
    saveToStorage(updatedComments);
    setThought('');
  }

  function handleDelete(commentId) {
    const updatedRoomComments = comments[activeRoom].filter(c => c.id !== commentId);
    const updatedComments = { ...comments, [activeRoom]: updatedRoomComments };
    setComments(updatedComments);
    saveToStorage(updatedComments);
  }

  const roomComments = comments[activeRoom] || [];

  // Handle username modal submit
  function handleNameSubmit(e) {
    e.preventDefault();
    if (username.trim()) {
      localStorage.setItem('username', username.trim());
      setShowNameModal(false);
    }
  }

  return (
    <Container
      className="p-4 my-4"
      style={{ maxWidth: '720px', backgroundColor: '#f8f9fa', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}
    >
      <h1 className="mb-4 text-center text-primary">Community Board</h1>

      {/* Username prompt modal */}
      <Modal show={showNameModal} backdrop="static" keyboard={false} centered>
        <Modal.Header>
          <Modal.Title>Welcome!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleNameSubmit}>
            <Form.Group controlId="usernameInput">
              <Form.Label>Please enter your name to join the chat</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                required
                placeholder="Your name"
                autoFocus
                aria-label="Enter your username"
                style={{ borderRadius: '8px' }}
              />
            </Form.Group>
            <Button className="mt-3 w-100" type="submit" variant="primary" style={{ borderRadius: '8px' }}>
              Join
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Nav
        variant="tabs"
        activeKey={activeRoom}
        onSelect={(k) => setActiveRoom(k)}
        className="mb-4"
        fill
        style={{ cursor: 'pointer' }}
      >
        {CHATROOMS.map(room => (
          <Nav.Item key={room}>
            <Nav.Link eventKey={room} style={{ fontWeight: '600', fontSize: '1rem' }}>
              {room}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>

      <Form onSubmit={handlePost} className="mb-4">
        <Form.Label htmlFor="comment-inp" className="fw-semibold">
          New Message in <span className="text-info">"{activeRoom}"</span>
        </Form.Label>
        <Form.Control
          id="comment-inp"
          value={thought}
          onChange={e => setThought(e.target.value)}
          placeholder="Write your message here..."
          aria-label="Write your message here"
          required
          disabled={showNameModal}
          style={{ borderRadius: '10px' }}
          rows={3}
          as="textarea"
        />
        <Button
          type="submit"
          className="mt-3"
          disabled={showNameModal}
          variant="success"
          style={{ borderRadius: '10px', fontWeight: '600' }}
        >
          Send
        </Button>
      </Form>

      <div
        style={{
          maxHeight: '400px',
          overflowY: 'auto',
          paddingRight: '0.5rem',
          borderRadius: '10px',
          border: '1px solid #dee2e6',
          backgroundColor: 'white',
        }}
        aria-live="polite"
        aria-label={`Messages in ${activeRoom} chatroom`}
      >
        {roomComments.length === 0 ? (
          <p className="text-center text-muted py-3">No messages yet in {activeRoom}. Be the first to post!</p>
        ) : (
          roomComments.map(({ id, comment, created, userId: commentUserId, username: commentUsername }) => (
            <Card
              key={id}
              className="mb-3 shadow-sm"
              bg={commentUserId === userId ? 'light' : 'white'}
              border={commentUserId === userId ? 'primary' : 'secondary'}
              style={{ borderRadius: '10px', transition: 'box-shadow 0.2s ease' }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 12px rgba(0,123,255,0.5)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 6px rgba(0,0,0,0.1)'}
            >
              <Card.Body>
                <Card.Title
                  style={{ fontSize: '0.9rem', fontWeight: '700' }}
                  className="d-flex justify-content-between align-items-center"
                >
                  <span>{commentUsername} {commentUserId === userId && <small className="text-primary">(You)</small>}</span>
                  <small className="text-muted" style={{ fontSize: '0.75rem' }}>
                    {new Date(created).toLocaleString()}
                  </small>
                </Card.Title>
                <Card.Text style={{ fontSize: '1rem', whiteSpace: 'pre-wrap' }}>
                  {comment}
                </Card.Text>
                {commentUserId === userId && (
                  <Button
                    variant="outline-danger"
                    size="sm"
                    className="float-end"
                    onClick={() => handleDelete(id)}
                    aria-label="Delete your message"
                    style={{ borderRadius: '6px' }}
                  >
                    Delete
                  </Button>
                )}
              </Card.Body>
            </Card>
          ))
        )}
      </div>
    </Container>
  );
}
