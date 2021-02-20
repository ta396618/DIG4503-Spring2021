import { useState } from "react"
import Axios from "axios";
import Pokemon from "../Pokemon"

function Search() {

    const [search, setSearch] = useState("")
    const [pokemon, setPokemon] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("")

    function searchMonsters() {

        setLoading(true);

        Axios("https://pokeapi.co/api/v2/pokemon/" + search)
            .then((response) => {
                setPokemon(response.data);
                
                setLoading(false);
            })
            .catch(() => {
                setError("Not found!")
            });
    }

    return (
        <div>
            <input type="text" onChange={(event) => {
                setSearch(event.target.value);
            }} />

            <button onClick={() => searchMonsters()
            }>Search</button>
            {
            <p>Searched: {search}</p>
            }
            {
            
                (loading == true) ? (
                 <h3 style={{color: "red"}} className="error"> {error} </h3>
                ) : (
                    <div>
                        <Pokemon name={pokemon.name}
                        id={pokemon.id}
                        sprites={pokemon.sprites.front_default} />
                    </div>
                    )
            }
        </div>
    );
}

export default Search