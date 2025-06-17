import React, { useState } from 'react';
import Radar from "./components/Radar/Radar";
import { array } from 'prop-types';

function App() {

    //     const [quatrants, addQuadrant] = useState(['tools', 'techniques', 'platforms', 'languages']);
    //     const [rings, addRings] = useState(['adopt', 'trial', 'assess', 'hold']);
    // const [data, addData] = useState([
    //             {
    //                 name: 'D3',
    //                 quadrant: 'tools',
    //                 ring: "assess"
    //             },
    //             {
    //                 name: 'TypeScript',
    //                 quadrant: 'languages',
    //                 ring: "trial"
    //             },
    //             {
    //                 name: 'Storybook',
    //                 quadrant: 'tools',
    //                 ring: "adopt"
    //             }
    //         ]);   
    const [setup, setSetup] = useState({
        rings: ['adopt', 'trial', 'assess', 'hold'],
        quadrants: ['tools', 'techniques', 'platforms', 'languages'],
        data: [
            {
                name: 'D3',
                quadrant: 'tools',
                ring: "assess"
            },
            {
                name: 'TypeScript',
                quadrant: 'languages',
                ring: "trial"
            },
            {
                name: 'Storybook',
                quadrant: 'tools',
                ring: "adopt"
            }
        ]
    });
    const [name, setName] = useState('');
    const [ring, setRing] = useState('hold');
    const [quadrant, setQuadrant] = useState('tools')

    const handleSubmit = (event) => {
        event.preventDefault();
        // todo handle unique name
        setup.data.push({
            name, ring, quadrant
        });
        setSetup(setup);
    }
    const handleDelete = (name) => {
        const index = setup.data.findIndex((v) => { v.name === name });
        setup.data.splice(index, 1);
        setSetup(setup);
    }
    return (
        <div className="App">
            {/* add form */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input type='text'></input>
                </div>
                <div>
                    <label>Ring</label>
                    <select >
                        {
                            setup.rings.forEach(ring => {
                                return (<li >{ring}</li>)
                            })
                        }
                    </select>
                </div>
                <div>

                    <label>Quadrant</label>
                    <select >
                        {
                            setup.quadrants.forEach(q => {
                                return (<li >{q}</li>)
                            })
                        }
                    </select>
                </div>
                <input type='submit'>Add</input>
            </form>
            <Radar {...setup} />
            {/* Edit data */}
            <div>
                <label>Delete</label>
                <select >
                    {
                        setup.data.forEach(datum => {
                            <li onClick={() => {
                                handleDelete(datum.name);
                            }}>{datum.name}</li>
                        })
                    }
                </select>
            </div>
        </div>
    );
}

export default App;
