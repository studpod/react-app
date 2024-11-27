import React from 'react';

const UserList = () => {
  const users = ['User 1', 'User 2', 'User 3', 'User 4'];
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
