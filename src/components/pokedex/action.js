import { ActionTypes } from "./actionTypes";


export function actionGetPokemons() {
    return {
      type: ActionTypes.GET_POKEMONS_REQUEST,
      loading: true
    };
  }