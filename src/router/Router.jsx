import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/home/Home";
import Character from "../components/character/Character";
import Location from "../components/location/Location";
import Episode from "../components/episode/Episode"
import IndividualCharacter from "../components/character/IndividualCharacter";
import IndividualEpisode from "../components/episode/IndividualEpisode";
import IndividualLocation from "../components/location/IndividualLocation";

class Router extends Component {
    render() { 
        return <div>
            <Routes>
                <Route path="/" element={<Home/>} />
                {/* Character */}
                <Route path="/character" element={<Character />} />
                <Route path="/character/:id" element={<IndividualCharacter />}/>
                {/* Location */}
                <Route path="/location" element={<Location />} />
                <Route path="/location/:id" element={<IndividualLocation />} />
                {/* Episode */}
                <Route path="/episode" element={<Episode />} />
                <Route path="/episode/:id" element={<IndividualEpisode />} />
            </Routes>
        </div>;
    }
}

export default Router;
