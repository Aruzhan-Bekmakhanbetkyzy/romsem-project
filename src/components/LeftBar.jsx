import React from "react";
import {
    logo,
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
        <div className="general_leftbar">
            <div>
                <img className="logo" src={logo} alt="logo" />
                <h1>Romsem</h1>
            <div className="underline"></div>
            </div>
            <div className="text">
                <img className="l_pizza" src={rightpizza} alt="pizza" />
                <text className="t_1">Pizza</text>
                <img className="l_sets" src={rightsets} alt="sets" />
                <text className="t_2">Sets</text>
                <img className="l_wok" src={rightwok} alt="wok" />
                <text className="t_3">WOK</text>
                <img className="l_rolls" src={rightrolls} alt="rolls" />
                <text className="t_4">Rolls</text>
                <img className="l_sushi" src={rightsushi} alt="sushi" />
                <text className="t_5">Sushi</text>
                <img className="l_salads" src={rightsalads} alt="salads" />
                <text className="t_6">Salads</text>
                <img className="l_soups" src={rightsoups} alt="soups" />
                <text className="t_7">Soups</text>
                <img
                    className="l_corndogs"
                    src={rightcorndogs}
                    alt="corndogs"
                />
                <text className="t_8">Corn dogs</text>
                <img className="l_drinks" src={rightdrinks} alt="drinks" />
                <text className="t_9">Drinks</text>
                <img
                    className="l_promotions"
                    src={rightpromotions}
                    alt="promotions"
                />
                <text className="t_10">Promotions</text>
            </div>
        </div>
    );
};

export default LeftBar;
