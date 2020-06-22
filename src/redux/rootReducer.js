import {combineReducers} from 'redux';
import PokemonReducer from '../components/pokedex/pokemonReducer';

export default combineReducers({
    pokemon_reducer: PokemonReducer  
});