import "./PokemonCard.css"
import config from  "./config.json"

/**
 * An entry of the pokedex wich includes the pokemon name and sprite.
 * @param {string} name - Pokemon name (i.e. Charizard)
 * @param {string} url - PokeAPI URL that can be used to fetch pokemon details.
 * @returns PokemonCard component.
 */
function PokemonCard({name, url}) {

    const pokemonID = url.match("/(?<id>[0-9]+)/")[1]
    const pokemonName = name[0].toUpperCase() + name.slice(1)
    const spriteURL = `${config.spriteURL}/${pokemonID}.png`

    return (
        <div className="card pokemon-card">
            <img className="pokemon-sprite" src={spriteURL} alt={`${name} sprite`}/>
            <div className="card-body">
                <h4 className="card-title">{pokemonName}</h4>
            </div>
        </div>
    );
}

export default PokemonCard;
