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
                    
                    <div className='home-logo'>
                    <span>Home</span>
                        <img src={PokeBall} alt='' width='40' height='25'/>
                    </div>
                </Link>
                
                   
                    <Nav className="mr-auto">
                        <h5>Gender</h5>&nbsp;&nbsp;
                        <ButtonGroup size="sm" className="mr-2" aria-label="First group">
                            <Link to='/gender/male'><Button variant="secondary" size='sm'>Male</Button></Link> &nbsp;
                            <Link to='/gender/female'><Button variant="secondary" size='sm'>Female</Button></Link> &nbsp;
                            <Link to='/gender/genderless'><Button variant="secondary" size='sm'>Genderless</Button></Link>
                        </ButtonGroup>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   
                        <h5>Habitat</h5>&nbsp;&nbsp;
                        <ButtonGroup className="mr-2" aria-label="First group">
                        <Link to='/habitat/cave'><Button variant="secondary" size='sm'>Cave</Button></Link> &nbsp;
                        <Link to='/habitat/forest'><Button variant="secondary" size='sm'>Forest</Button></Link> &nbsp;
                        <Link to='/habitat/grassland'><Button variant="secondary" size='sm'>Grassland</Button></Link> &nbsp;
                        <Link to='/habitat/mountain'><Button variant="secondary" size='sm'>Mountain</Button></Link> &nbsp;
                        <Link to='/habitat/rare'><Button variant="secondary" size='sm'>Rare</Button></Link> &nbsp;
                        <Link to='/habitat/rough-terrain'><Button variant="secondary" size='sm'>Rough Terrain</Button></Link> &nbsp;
                        <Link to='/habitat/sea'><Button variant="secondary" size='sm'>Sea</Button></Link>&nbsp;
                        <Link to='/habitat/urban'><Button variant="secondary" size='sm'>Urban</Button></Link>&nbsp;
                        <Link to='/habitat/waters-edge'><Button variant="secondary" size='sm'>Waters Edge</Button></Link>
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
