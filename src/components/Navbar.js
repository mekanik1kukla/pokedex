/*import { useEffect, useState } from "react";
import PokemonNames from "./PokemonNames";
import React  from "react";
import axios from 'axios'
import'../css/navbar.css'


function Navbar() {
    const [pokemons, setPokemons] = useState([]);
    const [inputValue, setInputValue] = useState('');
    useEffect(() => {
        axios.get(" https://pokeapi.co/api/v2/type?limit=20&offset=0").then(res=>{
            
            setPokemons(res.data.results)
        })
    },[" https://pokeapi.co/api/v2/type?limit=20&offset=0"]
    )
    
    return (
        <>
       
            <select className="typePut"><option value="All" defaultValue>All</option>
                {pokemons.map(p=>{ return(
                <option key={`${p.name}`} value={p.name}>{p.name}</option>)})}
            </select>
            <input type="text" className="namePut"  onChange={(event) => setInputValue(event.target.value)}  />
       
        </>
    )
}

export default Navbar;*/