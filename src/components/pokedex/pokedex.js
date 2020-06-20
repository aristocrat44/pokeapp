import React from 'react';
import Pokecard from '../pokecard/pokecard.js';
import axios from 'axios';
import loadingGIF from '../../img/loading_gangar.gif';
import './pokedex.css';
import InfiniteScroll from 'react-infinite-scroll-component';

class Pokedex extends React.Component{


    state={
        poke_api:"https://pokeapi.co/api/v2/pokemon?limit=20", //964
        pokemon:null,
        next:'',
        hasMore: true,
        items: Array.from({ length: 20 })
    }

    async componentDidMount(){
        const res = await axios.get(this.state.poke_api);
        this.setState({pokemon: res.data.results});
        
        this.setState({next:res.data.next});
        //this.setState({items: res.data.results.length})
    }

    fetchMoreData = async () => {
        const res = await axios.get(this.state.next);
        if(res.data.next){  
            this.setState({next:res.data.next, hasMore:true});
        }else{
            this.setState({hasMore: false});
        }
       
        //console.log('logs',this.state.pokemon);
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        setTimeout(() => {
            this.setState({
                items: this.state.items.concat(Array.from({ length: 20 }))
              });
        }, 100);
        this.setState({pokemon: (this.state.pokemon).concat(res.data.results)});
      };


    render(){
        return (
            <React.Fragment>
                 <InfiniteScroll
                    dataLength={this.state.items.length} //This is important field to render the next data
                    next={this.fetchMoreData}
                    hasMore={this.state.hasMore}
                    loader={<h4>Infinite Scroll Loading...</h4>}
                    endMessage={
                        <p style={{textAlign: 'center'}}>
                        <b>Yay! You have seen it all. Gotta cath'em all !</b>
                        </p>
                    }>
            {this.state.pokemon ? (
            <div className="pokedex">
                <h1>Pokedex !</h1>
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
