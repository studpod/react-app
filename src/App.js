import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';

const HomePage = lazy(() => import('./pages/HomePage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));
const SettingsPage = lazy(() => import('./pages/SettingsPage'));
const UserDetailPage = lazy(() => import('./pages/UserDetailPage'));
const HeavyComponent = lazy(() => import('./components/HeavyComponent'));

function App() {
  const [showHeavyComponent, setShowHeavyComponent] = useState(false);

  return (
    <Router>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/settings">Settings</NavLink>
        <NavLink to="/user-detail">User Detail</NavLink>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/user-detail" element={<UserDetailPage />} />
        </Routes>
      </Suspense>
      <button onClick={() => setShowHeavyComponent(true)}>
        Load Heavy Component
      </button>
      {showHeavyComponent && (
        <Suspense fallback={<div>Loading Heavy Component...</div>}>
          <HeavyComponent />
        </Suspense>
      )}
    </Router>
  );
}
export default App;