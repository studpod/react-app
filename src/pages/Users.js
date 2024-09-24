import React from "react";
import { Link } from "react-router-dom";


const Users = () =>{
    const users = [
        { id: 1, name: 'Oliver Johnson' },
        { id: 2, name: 'John Johnson' },
        { id: 3, name: 'Alice Johnson' },
    ];
   
    return (
        <div>
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
