import { combineReducers } from "redux";

import CharacterReducers from "./CharacterReducers";
import LocationReducers from "./LocationReducers";
import EpisodeReducers from "./EpisodeReducers";

const AllReducer = combineReducers({
    characterUrl: CharacterReducers,
    locationUrl: LocationReducers,
    episodeUrl: EpisodeReducers
});

export default AllReducer;