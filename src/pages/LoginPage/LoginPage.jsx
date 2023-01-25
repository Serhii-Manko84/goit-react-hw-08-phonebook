import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUserRequest } from 'redux/contacts/userSlice';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const formData = { email, password };
    dispatch(loginUserRequest(formData));
  };
  return (
    <div>
      <h1>LogIn</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            required
            onChange={event => setEmail(event.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            required
            onChange={event => setPassword(event.target.value)}
          />
        </label>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default LoginPage;
