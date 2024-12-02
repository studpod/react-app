import React from 'react';

const UserProfile = ({ user }) => {
  if (!user) {
    return <div>No user data</div>;
  }
  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserProfile;
