import React from "react";
import { logo } from "../images/images.js";
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

const LeftBar = () => {
    return (
        <div>
            <div>
                <img className="logo" src={logo} alt="logo" />
                <h1>Romsem</h1>
            </div>
            <div className="text">
              <img src={rightpizza} alt="pizza" />
                <text className="t_1">Pizza</text>
                <img src={rightsets} alt="" />
                <text className="t_2">Sets</text>
                <text className="t_3">WOK</text>
                <text className="t_4">Rolls</text>
                <text className="t_5">Sushi</text>
                <text className="t_6">Salads</text>
                <text className="t_7">Soups</text>
                <text className="t_8">Corn dogs</text>
                <text className="t_9">Drinks</text>
                <text className="t_10">Promotions</text>
            </div>

            <div className="underline"></div>
        </div>
    );
};

export default LeftBar;
