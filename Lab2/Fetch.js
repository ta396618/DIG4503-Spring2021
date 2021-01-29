import axios from 'axios';
import chalk from 'chalk';

class Fetch {
    constructor(pokemon, color) {
      this.pokemon = pokemon; 
      this.color = color;
    }

        fetch() {
            axios("https://pokeapi.co/api/v2/pokemon/" + this.pokemon)
            .then((response) => {
                const pokemon = response.data;

                console.log(chalk.hex(this.color)("This is  " + pokemon.name + " this has ID" + pokemon.id));
            })

            .catch(error => 

                console.log(chalk.red("error: " + error)))
            }
        }
    
    
    export default Fetch;