import Fetch from "./Fetch.js";

const pokemontrue = new Fetch(459, "#6a0dad");
const pokemonfalse = new Fetch(-24, "#6a0dad");

pokemontrue.fetch();
pokemonfalse.fetch();