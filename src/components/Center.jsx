import React from "react";
import { Route, Routes } from "react-router-dom";
import Pizza from "./routing/Pizza";
import Sets from "./routing/Sets";
import Wok from "./routing/Wok";
import Rolls from "./routing/Rolls";
import Sushi from "./routing/Sushi";
import Salads from "./routing/Salads";
import Soups from "./routing/Soups";
import Corndogs from "./routing/Corndogs";
import Drinks from "./routing/Drinks";
import Promotions from "./routing/Promotions";

const Center = () => {
    return (
        <div>
        <Routes>
            <Route path="/" element={<h1>aruka</h1>}></Route>
            <Route path="/pizza" element={<Pizza />}></Route>
            <Route path="/sets" element={<Sets />}></Route>
            <Route path="/wok" element={<Wok />}></Route>
            <Route path="/rolls" element={<Rolls />}></Route>
            <Route path="/sushi" element={<Sushi />}></Route>
            <Route path="/salads" element={<Salads />}></Route>
            <Route path="/soups" element={<Soups />}></Route>
            <Route path="/corndogs" element={<Corndogs />}></Route>
            <Route path="/drinks" element={<Drinks />}></Route>
            <Route path="/promotions" element={<Promotions />}></Route>
        </Routes>
        </div>
    );
};

export default Center;
