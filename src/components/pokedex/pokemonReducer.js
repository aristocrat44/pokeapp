import { ActionTypes } from "./actionTypes";

const INITIAL_STATE = {
  pokemon_data: [],
  loading: false,
  success: "",
  error: ""
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.GET_POKEMONS_REQUEST:
      return {...state}; //without this homepage would be null after returning back from routing to other pages
      break;

    case ActionTypes.GET_POKEMONS_SUCCESS:
      return {
        ...state,
        pokemon_data: action.results, // putting the saga returned data after API call to reducer variable that is going to be used by pokedex component
        success: true,
        loading: false
      };
      

    default:
      return INITIAL_STATE;
  }
}
