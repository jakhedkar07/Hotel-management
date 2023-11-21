import React, { useState } from 'react';

const User = () => {
  const [userId, setUserId] = useState('');

  const handleLogin = () => {
    const userId = prompt('Enter your user ID:');
    if (userId) {
      setUserId(userId);
    }
  };

  return (
    <div>
      {userId ? (
        <h3>Welcome, User {userId}</h3>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default User;
