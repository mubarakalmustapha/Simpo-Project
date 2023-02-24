import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { UserContext } from '../context/UserContext';

export default function EditForm({ user }) {
  const { updateUser } = useContext(UserContext);
  const _id = user._id;

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [middleName, setMiddleName] = useState(user.middleName);
  const [userName, setUserName] = useState(user.userName);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
  const [profilePicture, setProfilePicture] = useState(user.profilePicture);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(_id, {
      firstName,
      lastName,
      middleName,
      userName,
      email,
      password,
      phoneNumber,
      profilePicture,
    });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control
            value={firstName}
            type="text"
            placeholder="First Name *"
            required
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            value={middleName}
            type="text"
            placeholder="Middle Name *"
            required
            onChange={(e) => setMiddleName(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Control
            value={lastName}
            type="text"
            placeholder="Last Name *"
            required
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            value={userName}
            type="email"
            placeholder="Username *"
            required
            onChange={(e) => setUserName(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            value={email}
            type="email"
            placeholder="Email *"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            value={phoneNumber}
            type="text"
            placeholder="Phone *"
            required
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
            type="file"
            accept={'.jpg, .png, .jpeg, .jfif'}
            onChange={(e) => setProfilePicture(e.target.files[0])}
          />
        </Form.Group>
        <Button variant="success" type="submit">
          Edit User
        </Button>
      </Form>
    </div>
  );
}
