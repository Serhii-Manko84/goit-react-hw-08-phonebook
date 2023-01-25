import React from 'react';
import { useSelector } from 'react-redux';

function UserMenu() {
  const selectUser = useSelector();
  return (
    <div>
      <h1>User Menu</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <button>Logout</button>
    </div>
  );
}

export default UserMenu;
