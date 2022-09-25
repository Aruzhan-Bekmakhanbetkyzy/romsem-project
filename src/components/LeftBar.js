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
        <div className="general_leftbar">
            <div>
                <img className="logo" src={logo} alt="logo" />
                <h1>Romsem</h1>
            </div>
            <div className="text">
              <img className="r_pizza" src={rightpizza} alt="pizza" />
                <text className="t_1">Pizza</text>
                <img className="r_sets" src={rightsets} alt="sets" />
                <text className="t_2">Sets</text>
                <img className="r_wok" src={rightwok} alt="wok" />
                <text className="t_3">WOK</text>
                <img className="r_rolls" src={rightrolls} alt="rolls" />
                <text className="t_4">Rolls</text>
                <img className="r_sushi" src={rightsushi} alt="sushi" />
                <text className="t_5">Sushi</text>
                <img className="r_salads" src={rightsalads} alt="salads" />
                <text className="t_6">Salads</text>
                <img className="r_soups" src={rightsoups} alt="soups" />
                <text className="t_7">Soups</text>
                <img className="r_corndogs" src={rightcorndogs} alt="corndogs" />
                <text className="t_8">Corn dogs</text>
                <img className="r_drinks" src={rightdrinks} alt="drinks" />
                <text className="t_9">Drinks</text>
                <img className="r_promotions" src={rightpromotions} alt="promotions" />
                <text className="t_10">Promotions</text>
            </div>

            <div className="underline"></div>
        </div>
    );
};

export default LeftBar;
