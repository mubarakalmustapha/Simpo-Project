import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { UserContext } from '../context/UserContext';

export default function AddForm() {
  const { addUser } = useContext(UserContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [profilePicture, setProfilePicture] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(
      firstName,
      lastName,
      middleName,
      userName,
      email,
      password,
      phoneNumber,
      profilePicture
    );
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="First Name *"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Middle Name *"
            required
            value={middleName}
            onChange={(e) => setMiddleName(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Last Name *"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="email"
            placeholder="Username *"
            required
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="email"
            placeholder="Email *"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Phone *"
            required
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="password"
            placeholder="Password *"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="password"
            placeholder="Comfirm Password *"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Gender </Form.Label>
          <Form.Check required name="gender" label="Male" inline type="radio" />
          <Form.Check name="gender" label="Female" inline type="radio" />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="file"
            accept={'.jpg, .png, .jpeg, .jfif'}
            required
            onChange={(e) => setProfilePicture(e.target.files[0])}
          />
        </Form.Group>
        <Button variant="success" type="submit">
          Add New User
        </Button>
      </Form>
    </div>
  );
}
