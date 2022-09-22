import React from "react";

const Header = (time, search) => {
    return (
        <div className="header">
            <div className="info">
                <h4>Phone number</h4>
                <h3>+702 882 71 77 +778 790 78 86</h3>
                <img src={time} alt="time" />
                <p>we work from 10:00 to 00:00</p>
            </div>
            <div className="info-2">
                <h4>City:</h4>
                <h3>Nur-Sultan</h3>
                <div className="section">
                    <h3>reviews</h3>
                    <h2>shipping and payment</h2>
                    <img src="search" alt="search" />
                </div>
            </div>
        </div>
    );
};

export default Header;
