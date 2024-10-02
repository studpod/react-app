import React, {useContext} from "react";
import { Link } from "react-router-dom";
import {ThemeContext} from '../ThemeContext'

const Users = () =>{
    const {theme} = useContext(ThemeContext);
    const users = [
        { id: 1, name: 'Oliver Johnson' },
        { id: 2, name: 'John Johnson' },
        { id: 3, name: 'Alice Johnson' },
    ];
   
    return (
        <div className={theme === 'light' ? 'users-light' : 'users-dark'} >
            <h1>Users Page</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                    <Link to={`/users/${user.id}`}>{user.name}</Link>
                </li>
            ))}
            </ul>
        </div>
    );
  };

export default Users;
