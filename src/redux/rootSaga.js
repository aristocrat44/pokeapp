import {getPokemons} from '../components/pokedex/pokemonSaga';
import {fork, all} from 'redux-saga/effects'; 

function* RootSaga(){
    yield all([
        fork(getPokemons) //forging function from pokemon saga
    ])
}

export default RootSaga;