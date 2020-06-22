import { put } from "redux-saga/effects";
import { ActionTypes } from "./actionTypes";
import axios from 'axios';

export function* getPokemons(){
    try{
        const res =  yield axios.get('https://pokeapi.co/api/v2/pokemon?limit=20'); //equivalent of async await call
        yield put({
            type: ActionTypes.GET_POKEMONS_SUCCESS,
            results: res.data  // api returned data here
        });
    } catch (e) {
        console.log(e);
    }  
}
