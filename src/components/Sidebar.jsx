import React from "react";
import "../styles/Sidebar.scss";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import {
    rightpizza,
    rightsets,
    rightwok,
    rightrolls,
    rightsushi,
    rightsalads,
    rightsoups,
    rightcorndogs,
    rightdrinks,
    rightpromotions,
} from "../images/images.js";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li><Logo></Logo></li>
                <li>
                    <Link to="/">ROMSEM</Link>
                </li>
                <li>
                    <img src={rightpizza} alt="pizza" />
                    <Link to="/pizza">Pizza</Link>
                </li>
                <li>
                    <img src={rightsets} alt="sets" />
                    <Link to="/sets">Sets</Link>
                </li>
                <li>
                    <img src={rightwok} alt="wok" />
                    <Link to="/wok">Wok</Link>
                </li>
                <li>
                    <img src={rightrolls} alt="rolls" />
                    <Link to="/rolls">Rolls</Link>
                </li>
                <li>
                    <img src={rightsushi} alt="sushi" />
                    <Link to="sushi">Sushi</Link>
                </li>
                <li>
                    <img src={rightsalads} alt="salads" />
                    <Link to="/salads">Salads</Link>
                </li>
                <li>
                    <img src={rightsoups} alt="soups" />
                    <Link to="/soups">Soups</Link>
                </li>
                <li>
                    <img src={rightcorndogs} alt="corndogs" />
                    <Link to="/corndogs">Corn dogs</Link>
                </li>
                <li>
                    <img src={rightdrinks} alt="drinks" />
                    <Link to="/drinks">Drinks</Link>
                </li>
                <li>
                    <img src={rightpromotions} alt="promotions" />
                    <Link to="/promotions">Promotions</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
