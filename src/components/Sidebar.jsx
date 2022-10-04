import React from "react";
import "../styles/Sidebar.scss";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li>Home</li>
                <li>Products</li>
                <li>Cart</li>
            </ul>
        </div>
    );
};

export default Sidebar;
