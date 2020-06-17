import React from 'react';
import './pokecard.css';
import imgNA from '../../img/image-not-available.jpg';
import Tilt from 'react-tilt';

//const POKE_API ="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

//fancier image API
const IMG_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

//RULE: padding id to 3 digits number to fetch better pokemon images
let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3):number);

export default function Pokecard({name, url}) {

    const splitUrl = url.split('/');
    const lastURLSegment = splitUrl.pop() || splitUrl.pop();  // handle potential trailing slash
    
    const pokemon_id=padToThree(lastURLSegment);

    const imgSource = `${IMG_API}${padToThree(pokemon_id)}.png`; 

    return (
        <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }}>
        <div className="pokecard">
            <img src={imgSource ? imgSource : imgNA} title="click for details" alt=""/>
            <div className='description'>
            <h4 className="pokecard-title" >{pokemon_id}</h4>
            <h4 className="pokecard-title" >{name}</h4>
            </div>
        </div>
        </Tilt>
    )
}
