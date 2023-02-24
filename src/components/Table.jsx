import React, { useContext, useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { UserContext } from '../context/UserContext';
import AddForm from './AddForm';
import Users from './Users';

export default function Table() {
  const { users } = useContext(UserContext);
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    handleClose();
  }, [users]);

  return (
    <>
      <table
        style={{
          marginTop: '40px',
        }}
        className="table"
      >
        <thead>
          <tr>
            <th>Username</th>
            <th>First Name</th>
            <th>Middle Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Gender</th>
            <th>Password</th>
            <th>Profile Picture</th>
            <th>Actions</th>
            <th>
              <Button variant="success" onClick={handleShow}>
                + Add User
              </Button>
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <Users user={user} />
            </tr>
          ))}
        </tbody>
      </table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddForm />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} variant="secondary">
            Close{' '}
          </Button>
        </Modal.Footer>
      </Modal>{' '}
    </>
  );
}
