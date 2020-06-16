import React from 'react';
import './pokecard.css';

//const POKE_API ="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const IMG_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"

//RULE: padding id to 3 digits number to fetch better pokemon images
let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3):number);

export default function Pokecard({id, name}) {

    let imgSrc = `${IMG_API}${padToThree(id)}.png`; 

    return (
        <div className="pokecard">
            
            <img src={imgSrc} alt=""/>
            <h1 className="pokecard-title">{name}</h1>
        </div>
    )
}


//{id: 4, name:'Charmander', type:'fire', base_experience: 62}