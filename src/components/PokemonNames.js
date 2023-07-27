import axios from "axios";
import '../css/pokemonNames.css'
import React, { useEffect, useState } from "react";
let apidata = {data:{results:[]}};
export default function PokemonNames({ deger }) {
    //stateler burada belirleniyor...
    const [pokemons, setPokemons] = useState([]);
    const [isLoading, setLoading] = useState(true);
    //axios ile apiden gelen datayı apidata isimli objeye ekliyoruz...
    function handleChange() {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0").then(res => {
            setLoading(false);
            apidata = res;
            renderPokemons();
        })
    }
    //pokemonları render işlemi burada gerçekleşiyor 
    //eger bir deger gelmez ise degeri false yapıp filtresiz bir şekilde tüm veriyi veriyoruz...
    function renderPokemons(gelenDeger = false) {
        if (gelenDeger === false) {
            setPokemons(
                apidata.data.results.map(p => <div key={`${p.name}`} className="wed">
                    <img className="pokemonImg" src={`https://img.pokemondb.net/artwork/large/${p.name}.jpg`} alt={`${p.name}.jpg`}></img>
                    <div className="pokemonName">{p.name[0].toUpperCase() + p.name.substring(1)}</div>
                </div>)
            )
            return 0;
        }
        // eğer bir değer gelirse gelen değer ile filtreleme işlemi yapılıyor
        setPokemons(
            apidata.data.results.map(p => {
                if (p.name.search(gelenDeger) === -1) return null;
                    return (<div key={`${p.name}`} className="wed">
                        <img className="pokemonImg" src={`https://img.pokemondb.net/artwork/large/${p.name}.jpg`} alt={`${p.name}.jpg`}></img>
                        <div className="pokemonName">{p.name[0].toUpperCase() + p.name.substring(1)}</div>
                        
                    </div>)
            })
        )
    }

    useEffect(() => {
        handleChange();
    }, []
    )
    //veriler yüklenene kadar loading ekranı gösterecektir..
    if (isLoading) return "Loading.."
    return (
        <>
            <input type="text" className="namePut" onChange={(event) => renderPokemons(event.target.value)} />
            <div className="cards" key={`${pokemons}`}>{pokemons}</div>
        </>
    )
}
