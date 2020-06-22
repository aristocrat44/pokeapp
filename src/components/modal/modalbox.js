import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function ModalBox({modal, handleClose, name, ...leftOverProps}) {
    return (
        <div>
             {/* MODAL BOX Component*/}
        <Modal show={modal} onHide={handleClose}>
            <Modal.Header closeButton>
        <Modal.Title>{name.toUpperCase()}</Modal.Title>
            </Modal.Header>
                <Modal.Body>   
                   <div>
                       Type:
                       {leftOverProps.types.map(type => <li key={type}>{type}</li>)}
                   </div>
                   <div>
                       Height: {leftOverProps.height ? leftOverProps.height : ' '}
                   </div>
                   <div>
                       Weight: {leftOverProps.weight ? leftOverProps.weight : ' '}
                   </div>
                   <div>
                       Habitat: {leftOverProps.habitat ? leftOverProps.habitat : ' '}
                   </div>
                   <div>
                       Happiness: {leftOverProps.happiness ? leftOverProps.happiness : ' '}
                   </div>
                   <div>
                       Abilities: 
                        {(leftOverProps.abilities) ?
                        leftOverProps.abilities.map(ability => <li key={ability}>{ability}</li>)
                        : ' '
                        }
                   </div>
                   <div>
                       Egg Group:
                        {(leftOverProps.eggGroup) ?
                        leftOverProps.eggGroup.map(group=><li key={group}>{group}</li>)
                        : ' '
                        }
                   </div>
                   <div>
                       Growth Rate: {leftOverProps.growthRate ? leftOverProps.growthRate : ' '}
                   </div>
                   <div>
                       Generation: {leftOverProps.generation ? leftOverProps.generation : ' '}
                   </div>
                   <div>
                       Form Switchable: {leftOverProps.formSwitchable ? leftOverProps.formSwitchable : ' '}
                   </div>
                    <div>
                        Capture Rate: {leftOverProps.captureRate ? leftOverProps.captureRate : ' '}
                    </div>
                   <div>
                       Description: {leftOverProps.description ? leftOverProps.description : ' '}
                   </div>
            
                </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                            Close
                    </Button>
                    
                    </Modal.Footer>
        </Modal>
        </div>
    )
}
