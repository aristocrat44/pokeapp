import React from 'react';
import Pokecard from '../pokecard/pokecard.js';
import axios from 'axios';
import loadingGIF from '../../img/loading_gangar.gif';
import NavigationBar from '../nav/navbar';
import './pokedex.css';
import InfiniteScroll from 'react-infinite-scroll-component';

class Pokedex extends React.Component{


    state={
        poke_api:"https://pokeapi.co/api/v2/pokemon?limit=20", //964 max
        pokemon:null, // for poke api pokemon data return 
        next:'', // for calling next api for infinite scroll
        hasMore: true, // for checking if next api exists or not
        items: Array.from({ length: 20 }) // for length of pokemon data
    }

    async componentDidMount(){
        const res = await axios.get(this.state.poke_api);
        this.setState({pokemon: res.data.results});
        console.log(this.state.pokemon.map);
        this.setState({next:res.data.next});

    }

    // for calling next 20 pokemon data and adding next 20 data of pokemon to present data
    fetchMoreData = async () => {
        const res = await axios.get(this.state.next);
            if(res.data.next){  
                this.setState({next:res.data.next, hasMore:true});
            }else{
                this.setState({hasMore: false});
            }
       
        setTimeout(() => {
            this.setState({
                //concating data count 
                items: this.state.items.concat(Array.from({ length: 20 }))
              });
        }, 100);
            // adding merging present pokemon data with next incoming data for infinite scroll
        this.setState({pokemon: (this.state.pokemon).concat(res.data.results)});
      };


    render(){
        return (
            <React.Fragment>
                 <InfiniteScroll
                    dataLength={this.state.items.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.hasMore}
                    loader={<h4>Infinite Scroll Loading...</h4>}
                    endMessage={
                        <p>
                        <b>Yay! You have seen it all. Gotta cath'em all !</b>
                        </p>
                    }>
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

</InfiniteScroll>
            </React.Fragment>
        )
    }
}
export default Pokedex;
