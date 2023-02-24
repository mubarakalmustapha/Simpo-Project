import { useContext, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { UserContext } from '../context/UserContext';
import EditForm from './EditForm';

export default function Users({ user }) {
  const { deleteUser } = useContext(UserContext);
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <td>{user.userName}</td>
      <td>{user.firstName}</td>
      <td>{user.middleName}</td>
      <td>{user.lastName}</td>
      <td>{user.email}</td>
      <td>{user.phoneNumber}</td>
      <td>{user.gender}</td>
      <td>{user.password}</td>
      <td>
        <img
          style={{
            width: 50,
            height: 50,
            borderRadius: 50,
          }}
          src={
            user.profilePicture === './images/user.png'
              ? user.profilePicture
              : './images/no-avata.png'
          }
          alt=""
        />
      </td>
      <td>
        <button onClick={handleShow} className="btn btn-primary btn-small">
          Update
        </button>
      </td>
      <td>
        <button
          onClick={() => deleteUser(user._id)}
          className="btn btn-danger btn-small"
        >
          Delete
        </button>
      </td>
      <td>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EditForm user={user} />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleClose} variant="secondary">
              Close{' '}
            </Button>
          </Modal.Footer>
        </Modal>{' '}
      </td>
    </>
  );
}
