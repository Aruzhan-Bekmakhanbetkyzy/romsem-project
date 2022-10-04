import React from "react";
import "../styles/Sidebar.scss";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { rightpizza, rightsets, rightwok, rightrolls, rightsushi, rightsalads, rightsoups, rightcorndogs, rightdrinks, rightpromotions } from "../images/images.js";
import Pizza from "./Pizza"

const routes = [
    {
        path: "/",
        exact: true,
        sidebar: () => <div>home</div>,
        main: () => <h2>Home</h2>,
    },
    {
        path: "/pizza",
        element: {Pizza},
        sidebar: () => <div>pizza</div>,
        main: () => <h2>Pizza</h2>,
    },
    {
        path: "/sets",
        sidebar: () => <div>sets</div>,
        main: () => <h2>Sets</h2>,
    },
    {
        path: "/wok",
        sidebar: () => <div>wok</div>,
        main: () => <h2>Wok</h2>,
    },
    {
        path: "/rolls",
        sidebar: () => <div>rolls</div>,
        main: () => <h2>Rolls</h2>,
    },
    {
        path: "/sushi",
        sidebar: () => <div>sushi</div>,
        main: () => <h2>Sushi</h2>,
    },
    {
        path: "/salads",
        sidebar: () => <div>salads</div>,
        main: () => <h2>Salads</h2>,
    },
    {
        path: "/soups",
        sidebar: () => <div>soups</div>,
        main: () => <h2>Soups</h2>,
    },
    {
        path: "/corndogs",
        sidebar: () => <div>corndogs</div>,
        main: () => <h2>Corn dogs</h2>,
    },
    {
        path: "/drinks",
        sidebar: () => <div>drinks</div>,
        main: () => <h2>Drinks</h2>,
    },
    {
        path: "/promotions",
        sidebar: () => <div>promotions</div>,
        main: () => <h2>Promotions</h2>,
    },
];

const Sidebar = () => {
    return (
        <Router>
            <div className="sidebar">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <img src={rightpizza} alt="pizza" />
                        <Link to="/pizza">
                           
                        </Link>
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
                <div className="routes">
                    <Routes>
                        {routes.map((route, index) => {
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                children={<route.sidebar />}
                            />;
                        })}
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default Sidebar;
