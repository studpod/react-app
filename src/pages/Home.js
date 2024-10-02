import React, { useContext } from "react";
import { ThemeContext } from '../ThemeContext';


const Home = () =>{
  const { theme } = useContext(ThemeContext);
    return (
        <div className={theme === 'light' ? 'navbar-light' : 'navbar-dark'}>
          <h1>Home Page</h1>
          <p>Welcome to the homepage!</p>
        </div>
      );
    };

export default Home;