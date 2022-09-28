import React from "react";
import {
    time,
    search,
    food1,
    food2,
    food3,
    food4,
    food5,
    food6,
    food7,
    food8,
    food9,
    whatsapp,
    telegram,
    instagram,
} from "../images/images.js";

const Center = () => {
    return (
        <div className="general_center">
            <div className="top">
                <div className="top_left_side">
                    <h4 className="top_left_side_h4">Our phone</h4>
                    <h3 className="top_left_side_h3">
                        +702 882 7177 +778 890 7886
                    </h3>
                    <img className="time" src={time} alt="time" />
                    <h5 className="top_left_side_h5">
                        we work from 10:00 to 00:00
                    </h5>
                </div>
                <p className="top_right_side_p">City:</p>
                <h4 className="top_right_side_h4">Astana</h4>
                <div>
                    <h3 className="reviews">Reviews</h3>
                    <h3 className="ship_and_pay">Shipping and payment</h3>
                    <img className="search" src={search} alt="search" />
                </div>
            </div>
            <div className="middle">
                <div className="image-container">
                    <img
                        className="food_1"
                        src={food1}
                        alt="philadelphia and salmon"
                    />
                    <img className="food_2" src={food2} alt="chicken" />
                    <img className="food_3" src={food3} alt="pizza" />
                    <img className="food_4" src={food4} alt="with eel" />
                    <img className="food_5" src={food5} alt="corn-dog" />
                    <img className="food_6" src={food6} alt="promotions" />
                </div>
                <h2 className="novelties">Novelties</h2>
                <h2 className="popular">Popular</h2>
                <div className="food_cards">
                    <div className="salamon_set">
                        <img src={food7} alt="salamon set" />
                        <h2>Salamon set</h2>
                        <h3>1050 grams, 30 pieces</h3>
                        <div className="food_card_underline"></div>
                        <h2 className="price">9000 tenge</h2>
                        <button>want</button>
                    </div>
                    <div className="phila_and_salmonset">
                        <img src={food8} alt="philadelphia and salmon set" />
                        <h2>Philadelphia and salmon set</h2>
                        <h3>1260 grams, 36 pieces</h3>
                        <div className="food_card_underline"></div>
                        <h2 className="price">7000 tenge</h2>
                        <button>want</button>
                    </div>
                    <div className="biggest_phila">
                        <img src={food9} alt="biggest philadelphia" />
                        <h2>Biggest Philadelphia</h2>
                        <h3>2050 grams, 45 pieces</h3>
                        <div className="food_card_underline"></div>
                        <h2 className="price">12300 tenge</h2>
                        <button>want</button>
                    </div>
                    <div className="info_order">
                        <h1>Order sushi in Astana</h1>
                        <h2>
                            Restaurant "Sushi and Noodles" we offer our
                            customers the most delicious sushi with home
                            delivery cooked according to classic and adapted to
                            European audience recipes, as well as our chefs' own
                            developments. We value the time of our customers, so
                            you can order sushi in Kharkov with home or office
                            delivery. There are more than 20 types of sushi in
                            our menu: ...Classic with raw salmon, tuna, perch.
                            ...Exotic with tiger shrimp, scallop. ...Piquant
                            with smoked salmon, eel. The menu also includes
                            gunkans: stuffed with red caviar and tobiko, as well
                            as felix, where Japanese mayonnaise is combined with
                            fish, seafood, eel. Fans of spicy dishes can buy
                            sushi with spicy sauce. Popular toppings are smoked
                            chicken, snow crab, shrimp, scallops, tuna, salmon
                            and perch.
                        </h2>
                        <button className="more">More</button>
                    </div>
                </div>
            </div>
            <div className="foot">
                <div className="foot_underline"></div>
                <div className="foot_info">
                    <h3 className="about">About company</h3>
                    <h3 className="shipping">Shipping and payment</h3>
                    <h3 className="tape">Material tape</h3>
                    <h3 className="policy">Return policy</h3>
                    <div className="verticalLine vLine_1"></div>
                </div>
                <div className="social">
                    <h3 className="enter">Enter number</h3>
                    <h3 className="number">+778 ___ __ __</h3>
                    <h3 className="com_text">
                        Choose a convenient messenger for communication
                    </h3>
                    <div className="social_icons">
                        <img
                            className="whatsapp"
                            src={whatsapp}
                            alt="whatsapp"
                        />
                        <img
                            className="telegram"
                            src={telegram}
                            alt="telegram"
                        />
                        <img
                            className="instagram"
                            src={instagram}
                            alt="instagram"
                        />
                        <div className="verticalLine vLine_2"></div>
                    </div>
                </div>
                <div className="contacts">
                    <h3>Num:+778 790 7886 Num:+702 882 7177</h3>
                    <h3 className="address">Address: Mangilik El 23</h3>
                </div>
            </div>
        </div>
    );
};

export default Center;
