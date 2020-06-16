import React from 'react';
import Pokecard from '../pokecard/pokecard.js';
import './pokedex.css';

export default function Pokedex() {

    let pokemon = [
        {id: 4, name:'Charmander', type:'fire', base_experience: 62},
        {id: 4, name:'Charmander', type:'fire', base_experience: 62},
        {id: 4, name:'Charmander', type:'fire', base_experience: 62},
        {id: 4, name:'Charmander', type:'fire', base_experience: 62},
        {id: 4, name:'Charmander', type:'fire', base_experience: 62},
        {id: 4, name:'Charmander', type:'fire', base_experience: 62},
        {id: 4, name:'Charmander', type:'fire', base_experience: 62},
        {id: 4, name:'Charmander', type:'fire', base_experience: 62},
        {id: 4, name:'Charmander', type:'fire', base_experience: 62},
        {id: 4, name:'Charmander', type:'fire', base_experience: 62},
    ];

    return (
        <div className="pokedex">
            <h1>Pokedex !</h1>
            <div className="pokedex-cards">
                {pokemon.map((p)=>(
                    <Pokecard key={p.id} id={p.id} name={p.name}/>
                ))}
            </div>
        </div>
    )
}
