const intialState = {
    url: "https://rickandmortyapi.com/api/character/"
};

const CharacterReducers = (state = intialState, action) => {
    if(action.type === "CHARACTER"){
        return state.url;
    } else{
        return state;
    }
}

export default CharacterReducers;
