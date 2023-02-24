import { createContext, useEffect, useState } from 'react';
import { usersData } from '../services/users';
import { v4 as uuidv4 } from 'uuid';

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [users, setUsers] = useState(usersData);

  useEffect(() => {
    setUsers(JSON.parse(localStorage.getItem('users')));
  }, []);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  });

  function addUser(
    firstName,
    lastName,
    middleName,
    email,
    userName,
    phoneNumber,
    password,
    profilePicture
  ) {
    setUsers([
      ...users,
      {
        _id: uuidv4(),
        firstName,
        lastName,
        middleName,
        email,
        userName,
        phoneNumber,
        password,
        profilePicture,
      },
    ]);
  }

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user._id !== id));
  };

  function updateUser(id, updateUser) {
    setUsers(users.map((user) => (user._id === id ? updateUser : user)));
  }

  return (
    <UserContext.Provider value={{ users, addUser, deleteUser, updateUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
