import React, { Component } from 'react';
import axios from 'axios';
import NavigationBar from '../../components/nav/navbar';
import './region.css'

export default class Johto extends Component {

    state={
        locations:null
    }
    
    async componentDidMount(){     
        const res = await axios.get('https://pokeapi.co/api/v2/region/2');
        console.log('asd',res.data.locations);
        const locations = res.data.locations;
       let mapped_data = locations.map((location) => {
        return (
            <div className='region-cards'>
                <ul key={location.name} style={{listStyle:"none"}}>   
                <li><span>Name:</span>{location.name}</li>
                <li><span>Url:</span><a href={location.url} target="_blank">{location.url}</a></li>
                </ul>
            </div>
        );
        });
        this.setState({locations: mapped_data});
       
    }

    render() {
        return (
            <div>
                <NavigationBar/>
                <h1>Region JOHTO</h1>
                <div className='region'>     
                        {this.state.locations}
                </div>        
            </div>
        
        )
    }
}
