const intialState = {
    url: "https://rickandmortyapi.com/api/location/"
};

const LocationReducers = (state = intialState, action) => {
    if(action.type === "LOCATION"){
        return state.url;
    } else{
        return state;
    }
}

export default LocationReducers;
