import { useState } from 'react';
import './Country.css'
const Country = ({country}) => {
    console.log(country); 
    // structure
    const {name, flags, area, population,cca3} = country; 

    // useState 
    const [visited, setVisited] = useState(false); 
    
    // handle visited
    const handleVisited = () =>{
        setVisited(!visited); 
    }

    return (
        <div className={`Country ${visited && 'visited'}`}>
            <h3>name: {name.common}</h3>
            <img src={flags.png} alt={flags.alt} />
            <h3>Population: {population}</h3>
            <p>Area: {area}</p>
            <p>Code :<small>{cca3}</small></p>
            <button onClick={handleVisited}>{visited? 'Visited' : 'Visite'}</button><br /><br />
            <div style={{backgroundColor: "#2E073F", color:"white", padding: '7px',borderRadius: '5px',}}>
            {visited ? "I have visited country" : "I want to visit this country"}
            </div>
        </div>
    );
};

export default Country;