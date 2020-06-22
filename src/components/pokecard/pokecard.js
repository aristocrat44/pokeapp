import React,{useState} from 'react';
import './pokecard.css';
import imgNA from '../../img/image-not-available.jpg';
import loadingGIF from '../../img/loading_pokeball.gif';
import Tilt from 'react-tilt';
import ReactImageFallback from "react-image-fallback";
import ModalBox from '../modal/modalbox';

//const POKE_API ="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

//fancier image API
const IMG_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

const SPECIES_API = 'https://pokeapi.co/api/v2/pokemon-species/';

const DETAIL_API = 'https://pokeapi.co/api/v2/pokemon/';

//RULE: padding id to 3 digits number to fetch better pokemon images
let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3):number);

export default function Pokecard({name, url}) {

    //MODAL BOX visibility state - initally false
    const [modal, setModal] = useState(false);

    //Pokemon Details
    const [types, setTypes] = useState([]);
    const [happiness, setHappiness] = useState();
    const [captureRate, setCaptureRate] = useState();
    const [description, setDescription] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [eggGroup, setEggGroup] = useState([]);
    const [abilities, setAbilities]= useState([]);
    const [growthRate, setGrowthRate]= useState('');
    const [generation, setGeneration]= useState('');
    const [habitat, setHabitat]= useState('');
    const [formSwitchable, setFormSwitchable] = useState('');

    

    // splitting and padding URL for Pokemon image via ID
    const splitUrl = url.split('/');
    const lastURLSegment = splitUrl.pop() || splitUrl.pop();  // handle potential trailing slash    
    const pokemon_id=padToThree(lastURLSegment);
    const imgSource = `${IMG_API}${padToThree(pokemon_id)}.png`; 

    async function getPokemonDetails(){
        let response = await fetch(`${DETAIL_API}${lastURLSegment}`);
        return response.json();
    }

    async function getSpeciesDetails(){
        let response = await fetch(`${SPECIES_API}${lastURLSegment}`);
        return response.json();
    }

    //handle Modal BOX event
    const handleClose = () => setModal(false);
    
    const handleOpen = async () => {
        setModal(true);

        let individual_data = await getPokemonDetails();
        let species_data = await getSpeciesDetails();

        setAbilities(individual_data.abilities.map((ability) =>{
           return ability.ability.name
        }));
        setHeight(individual_data.height);
        setWeight(individual_data.weight);
        setTypes(individual_data.types.map((type)=>{
            return type.type.name;
        }));

        setEggGroup(species_data.egg_groups.map((group)=>{
            return group.name;
        }));
        setGrowthRate(species_data.growth_rate.name);
        setHabitat(species_data.habitat.name);
        setGeneration(species_data.generation.name);
        setFormSwitchable(species_data.forms_switchable ? 'Yes':'No');
        setHappiness(species_data.base_happiness);
        setCaptureRate(species_data.capture_rate);
        setDescription(species_data.flavor_text_entries[0].flavor_text);
        

    };
      
    const {...leftOverProps} = {types, happiness, captureRate, description, height, weight, eggGroup, abilities, growthRate, generation, habitat, formSwitchable};

    return (
    <React.Fragment>
        {/* Card Component */}
        <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }}>
        <div className="pokecard" onClick={handleOpen}>
            <ReactImageFallback
                    src={imgSource}
                    fallbackImage={imgNA}
                    initialImage={loadingGIF}
                    alt="click for details"
                     />
            <div className='description'>
            <h4 className="pokecard-title" >ID: {lastURLSegment}</h4>
            <h4 className="pokecard-title" >{name}</h4>
            
            </div>
        </div>
        </Tilt>
        <ModalBox modal={modal} handleClose={handleClose} name={name} {...leftOverProps}/>
        
        {/* MODAL BOX Component
        <Modal show={modal} onHide={handleClose}>
            <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
                <Modal.Body>
            {types.map(type => <li key={type}>{type}</li>)}
                </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                            Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                            Save Changes
                    </Button>
                    </Modal.Footer>
        </Modal> */}
     </React.Fragment>
    )
}
