import React, { Component } from 'react';
import {Navbar, Button, Nav, ButtonGroup} from 'react-bootstrap';
import './navbar.css';
import {Link} from "react-router-dom";
import PokeBall from '../../img/pokeball_home.png';



export default class NavigationBar extends Component {

    state={
    
    }


    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark" expand="lg">
                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
                 <Navbar.Collapse id="basic-navbar-nav">
                <Link to='/'>
                    <div className='home'>
                        <img src={PokeBall} alt='' width='45' height='30'/>
                    </div>
                </Link>
                
                    <Navbar.Brand><h5>Filter by:</h5></Navbar.Brand>
                    <Nav className="mr-auto">
                        <h5>Gender</h5>&nbsp;&nbsp;
                        <ButtonGroup size="sm" className="mr-2" aria-label="First group">
                            <Link to='/gender/male'><Button variant="secondary" size='sm'>Male</Button></Link> &nbsp;
                            <Link to='/gender/female'><Button variant="secondary" size='sm'>Female</Button></Link> &nbsp;
                            <Link to='/gender/genderless'><Button variant="secondary" size='sm'>Genderless</Button></Link>
                        </ButtonGroup>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   
                        <h5>Habitat</h5>&nbsp;&nbsp;
                        <ButtonGroup className="mr-2" aria-label="First group">
                        <Link to='/habitat/forest'><Button variant="secondary" size='sm'>Forest</Button></Link> &nbsp;
                        <Link to='/habitat/mountain'><Button variant="secondary" size='sm'>Mountain</Button></Link> &nbsp;
                        <Link to='/habitat/rare'><Button variant="secondary" size='sm'>Rare</Button></Link> &nbsp;
                        <Link to='/habitat/rough-terrain'><Button variant="secondary" size='sm'>Rough Terrain</Button></Link> &nbsp;
                        <Link to='/habitat/sea'><Button variant="secondary" size='sm'>Sea</Button></Link>
                        </ButtonGroup>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   
                        <h5>Region</h5>&nbsp;&nbsp;
                        <ButtonGroup className="mr-2" aria-label="First group">
                        <Link to='/region/kanto'><Button variant="secondary" size='sm'>Kanto</Button></Link>&nbsp;
                        <Link to='/region/johto'><Button variant="secondary" size='sm'>Johto</Button></Link>&nbsp;
                        <Link to='/region/hoenn'><Button variant="secondary" size='sm'>Hoenn</Button></Link>
 
                        </ButtonGroup>
                 
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
