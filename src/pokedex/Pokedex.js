import { useState } from "react";
import PokemonCard from "./PokemonCard";
import ScrollEnd from "./ScrollEnd"
import config from  "./config.json"
import "./Pokedex.css"

/**
 * Creates a new Pokedex.
 * @constructor
 */
function Pokedex() {

    const [pokemonList, setPokemonList] = useState([])

    const fetchPokemonList = () => {
        const offset = pokemonList.length
        const {pokemonListLimit, pokemonListURL} = config
        fetch(`${pokemonListURL}?limit=${pokemonListLimit}&offset=${offset}`)
            .then(resp => resp.json())
            .then(data => setPokemonList([...pokemonList, ...data.results]))
            .catch(error => {
                console.error("Failed to retrieve pokemon data for " +
                              `offset ${offset} because ${error}`)
            })
    }

    const pokemonCards = pokemonList.map((pokemonData, i) =>
        <PokemonCard name={pokemonData.name} url={pokemonData.url} key={i}/>
    )

    return (
        <div className="pokedex-container">
            <div className="pokedex">
                {pokemonCards}
            </div>
            <ScrollEnd
                options={{root: null, rootMargin: "0px", threshold: 0.99}}
                callback={fetchPokemonList}
            />
        </div>
    );
}

export default Pokedex;
