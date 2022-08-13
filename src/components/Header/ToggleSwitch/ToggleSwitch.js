import React from 'react';
import "./ToggleSwitch.css";

const ToggleSwitch = () => {
    return (
        <div>
            <label className="switch">
                <input type="checkbox"/>
                <span className="slider"/>
            </label>
        </div>
    );
};

export default ToggleSwitch;