import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import {ThemeContext} from '../ThemeContext';

const UserDetails = () => {
    const { theme } = useContext(ThemeContext);
    const { id } = useParams();

    // Статичні дані користувачів
    const users = [
        { id: '1', name: 'Oliver Johnson' },
        { id: '2', name: 'John Johnson' },
        { id: '3', name: 'Alice Johnson' },
    ];

    // Знайти користувача за ID
    const user = users.find(user => user.id === id);

    return (
        <div className={theme === 'light' ? 'user-details-light' : 'user-details-dark'} >
            <h1>User Details Page</h1>
            {user ? (
                <>
                 <p>User Name: {user.name}</p>
                    <p>User ID: {user.id}</p>
                   
                </>
            ) : (
                <p>User not found.</p>
            )}
        </div>
    );
};

export default UserDetails;