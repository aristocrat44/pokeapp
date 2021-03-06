import React, { Component } from 'react'
import Pokecard from '../../components/pokecard/pokecard';
import axios from 'axios';
import loadingGIF from '../../img/loading_gangar.gif';
import NavigationBar from '../../components/nav/navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class FemaleSpecies extends Component {

    state={
        pokemon:null, // for poke api pokemon data return  
        alert:false
    }


    async componentDidMount(){
    const res = await axios.get('https://pokeapi.co/api/v2/gender/female');
      const data = res.data.pokemon_species_details;
      this.setState({pokemon: data.map((p)=>(
          p.pokemon_species
        ))
      });
       this.notify();
    }

    notify = () => toast('Filter - Gender: Female applied !',{type:'dark'});
    

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
