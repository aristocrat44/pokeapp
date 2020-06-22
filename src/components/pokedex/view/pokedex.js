import React,{useEffect, useState} from 'react';
import Pokecard from '../../pokecard/pokecard';
import axios from 'axios';
import loadingGIF from '../../../img/loading_gangar.gif';
import NavigationBar from '../../nav/navbar';
import './pokedex.css';
import {actionGetPokemons} from '../action';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import {Spinner, InputGroup, FormControl} from 'react-bootstrap';

const Pokedex = props =>{
  
            // poke_api:"https://pokeapi.co/api/v2/pokemon?limit=20", //964 max
    const [pokemons,setPokemons] = useState(null); // for poke api pokemon data return 
    const [searchField, setSearchField] = useState('');
    const [next, setNext] = useState(''); // for calling next api for infinite scroll
    const [hasMore, setHasMore] = useState(true); // for checking if next api exists or not
    const [items, setItems] = useState(Array.from({ length: 20 })); // for length of pokemon data
      
   
  // equivalent of componentDidMount          
  useEffect(()=>{
      props.actions.actionGetPokemons();
    },[]);

  // equivalent of componentDidUpdate data are returned from redux
  useEffect(()=>{
    setPokemons(props.redux_pokemons);
    setNext(props.redux_nextAPI);
  },[props.redux_pokemons]);


    // for calling next 20 pokemon data and adding next 20 data of pokemon to present data
   const fetchMoreData = async () =>
   {
        const res = await axios.get(next);
            if(res.data.next){  
               setNext(res.data.next);
               setHasMore(true);
            }else{
                setHasMore(false);
            }
       
        setTimeout(() => {
           setItems(
                //concating data count 
                items.concat(Array.from({ length: 20 }))
              );
        }, 100);
            // adding merging present pokemon data with next incoming data for infinite scroll
        setPokemons((pokemons).concat(res.data.results));
    };

    // setting search field value on change
    const onSearch = (val) => 
    {
        setSearchField(val);
    }


 
    if(pokemons) // filtering returned pokemons via name entered in search field = taking advantage of BLOCK SCOPE instead of using state for var filteredPokemons
    {
     var filteredPokemons = pokemons.filter((p) =>
     p.name.toLowerCase().includes(searchField.toLowerCase()));  
    }

        return (
            <React.Fragment>
                <InfiniteScroll
                    dataLength={items.length}
                    next={fetchMoreData}
                    hasMore={hasMore}
                    loader={ 
                    <div style={{minWidth:"50px"}}>
                        <Spinner animation="border"/>
                        <Spinner animation="border" style={{float:"right"}}/>
                    </div>
                    }                    
                    endMessage={
                        <p>
                        <b>Yay! You have seen it all brah. Gotta cath'em all !</b>
                        </p>
                    }>
                    {pokemons ?
                        (
                            <div className="pokedex">
                            <div><NavigationBar/></div>
                            <div className='searchbox'>
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-default">Search</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        onChange={(e) =>onSearch(e.target.value)}
                                    />
                                </InputGroup>
                            </div>
                                <div className="pokedex-cards">
                                    {filteredPokemons.map((p)=>(
                                        <Pokecard key={p.name} name={p.name} url={p.url}/>
                                    ))}
                                
                                </div>
                            </div>
                        ) : (<img src={loadingGIF} alt="" className='loading'/>)
                    }

                </InfiniteScroll>
            </React.Fragment>
        )
    }
 


const mapStateToProps = (state,props) => {
    console.log('results here',state.pokemon_reducer.pokemon_data.results);
    return { //setting redux returned data from reducer state to props to use above
      redux_pokemons: state.pokemon_reducer.pokemon_data.results, 
      redux_nextAPI: state.pokemon_reducer.pokemon_data.next
    };
  
  };
  
  function mapDispatchtoProps(dispatch) {
    return {
      actions: bindActionCreators(
        {
         actionGetPokemons //dispatching action function to get data from redux flow
        },
        dispatch
      )
    };
  }

  
export default connect(mapStateToProps, mapDispatchtoProps)(Pokedex);

