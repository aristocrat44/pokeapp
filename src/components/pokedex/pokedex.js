import React from 'react';
import Pokecard from '../pokecard/pokecard.js';
import axios from 'axios';
import loadingGIF from '../../img/loading_gangar.gif';
import './pokedex.css';

class Pokedex extends React.Component{


    state={
        poke_api:"https://pokeapi.co/api/v2/pokemon?limit=964",
        pokemon:null
    }

    async componentDidMount(){
        const res = await axios.get(this.state.poke_api);
        this.setState({pokemon: res.data.results});
    }

    render(){
        return (
            <React.Fragment>
            {this.state.pokemon ? (
            <div className="pokedex">
                <h1>Pokedex !</h1>
                <div className="pokedex-cards">
                    {this.state.pokemon.map((p)=>(
                        <Pokecard key={p.name} name={p.name} url={p.url}/>
                    ))}
                </div>
            </div>
            ) : (<img src={loadingGIF} className='loading'/>) }
            </React.Fragment>
        )
    }
}
export default Pokedex;
