import React, { useState } from 'react';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import Footer from './components/Footer';

const App = () => {
  const [user, setUser] = useState(null);

  const fetchUser = () => {
    // Імітація API-запиту
    setTimeout(() => {
      setUser({ name: 'John Doe', email: 'john.doe@example.com' });
    }, 1000);
  };

  return (
    <div>
      <Header />
      <button onClick={fetchUser}>Load User</button>
      <UserProfile user={user} />
      <Footer />
    </div>
  );
};

export default App;
