import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Pokedex from './components/pokedex/pokedex.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MaleSpecies from './pages/gender/malespecies';
import FemaleSpecies from './pages/gender/femalespecies';
import Genderless from './pages/gender/genderless';
import Forest from './pages/habitat/forest';
import Mountain from './pages/habitat/mountain';
import Rare from './pages/habitat/rare';
import RoughTerrain from './pages/habitat/rough-terrain';
import Sea from './pages/habitat/sea';
import Kanto from './pages/region/kanto';
import Johto from './pages/region/johto';
import Hoenn from './pages/region/hoenn';


function App() {
  return (
    <Router>
    <div className="">
    <Switch>
      <Route exact path='/' component={Pokedex}/>
      <Route exact path='/gender/male' component={MaleSpecies}/>
      <Route exact path='/gender/female' component={FemaleSpecies}/>
      <Route exact path='/gender/genderless' component={Genderless}/>
      <Route exact path='/habitat/forest' component={Forest}/>
      <Route exact path='/habitat/mountain' component={Mountain}/>
      <Route exact path='/habitat/rare' component={Rare}/>
      <Route exact path='/habitat/rough-terrain' component={RoughTerrain}/>
      <Route exact path='/habitat/sea' component={Sea}/>
      <Route exact path='/region/kanto' component={Kanto}/>
      <Route exact path='/region/johto' component={Johto}/>
      <Route exact path='/region/hoenn' component={Hoenn}/>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
