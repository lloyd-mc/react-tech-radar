import React, { useState } from 'react';
import Radar from "./components/Radar/Radar";

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
    const [name,setName]= useState('');
    const [ring, setRing]= useState('hold');
    const [quadrant, setQuadrant]= useState('tools')

    const handleSubmit = (event) =>{
        event.preventDefault();
        setup.data.push({
            name, ring, quadrant
        });
        setSetup(setup);
    }
    return (
        <div className="App">
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
        </div>
    );
}

export default App;
