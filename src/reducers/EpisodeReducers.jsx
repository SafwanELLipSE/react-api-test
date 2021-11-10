const intialState = {
    url: "https://rickandmortyapi.com/api/episode/"
};

const EqisodeReducers = (state = intialState, action) => {
    if(action.type === "EPISODE"){
        return state.url;
    } else{
        return state;
    }
}

export default EqisodeReducers;
