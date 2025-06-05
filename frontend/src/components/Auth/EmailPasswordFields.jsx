// src/components/Auth/EmailPasswordFields.jsx
import React from 'react';

const EmailPasswordFields = ({ email, password, setEmail, setPassword }) => {
  return (
    <>
      <input
        type="email"
        placeholder="Email ID"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
    </>
  );
};

export default EmailPasswordFields;
