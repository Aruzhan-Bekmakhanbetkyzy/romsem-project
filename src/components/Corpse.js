import React from "react";
import {food1} from "../images/images.js";
import {food2} from "../images/images.js"


const Corpse = () => {
  console.log('aryjj', food1);
    return (
        <div className="all">
            <div className="basic-image">
                <img src={food1} alt="food-1" />
            </div>
            <div className="bigImages">
                <img className="bigImg first" src={food2} alt="Chicken" />
                <img className="bigImg second" src="" alt="Pizza" />
                <img className="bigImg third" src="" alt="Promotions" />
            </div>

            <div>
              <h4 className="text">Novelties</h4>
              <h4 className="text_2">Popular</h4>
            </div>

            <div className="smallImages">
            <img className="smallImg 1" src="" alt="With eel" />
            <img className="smallImg 2" src="" alt="Corn dog" />

            </div>
        </div>
    );
};

export default Corpse;
