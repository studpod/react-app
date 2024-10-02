import React, { useContext } from "react";
import { ClickContext } from '../ClickContext';
import '../App.css';

const ClickDisplay = () => {
    const { clicks } = useContext(ClickContext);
    
    return (
        <div className="click-display">
            <p>Кількість кліків: {clicks}</p>
        </div>
    );
};

export default ClickDisplay;