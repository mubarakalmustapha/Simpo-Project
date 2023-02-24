import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div
        style={{
          margin: '0px 20px',
          padding: '10px',
        }}
      >
        <Link className="navbar-brand" to="/register">
          Register
        </Link>
        <Link className="navbar-brand" to="/logout">
          Logout
        </Link>
      </div>
    </nav>
  );
}
