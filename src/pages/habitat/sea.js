import React, { Component } from 'react'
import Pokecard from '../../components/pokecard/pokecard';
import axios from 'axios';
import loadingGIF from '../../img/loading_gangar.gif';
import NavigationBar from '../../components/nav/navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Sea extends Component {

    state={
        pokemon:null, // for poke api pokemon data return  
        alert:false
    }


    async componentDidMount(){
    const res = await axios.get('https://pokeapi.co/api/v2/pokemon-habitat/7');
    this.setState({pokemon: res.data.pokemon_species});
       this.notify();
    }

    notify = () => toast('Filter - Region: SEA applied !',{type:'dark'});
    

    render() {
        return (
            <React.Fragment>       
            <ToastContainer position="top-center" autoclose="10000"/>           
                 {this.state.pokemon ? (
                    <div className="pokedex">
                    <div><NavigationBar/></div> 
                        <div className="pokedex-cards">
                    
                            {this.state.pokemon.map((p)=>(
                                <Pokecard key={p.name} name={p.name} url={p.url}/>
                            ))}
                        
                        </div>
                    </div>
                    ) : (<img src={loadingGIF} alt="" className='loading'/>) } 

               
            </React.Fragment>
        )
    }
}
