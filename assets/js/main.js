const offset = 3;
const limit = 1;
const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${offset}.png`

document.getElementsByClassName("nomes escolhidos")

fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons_lista) => console.log(pokemons_lista))
    .catch((error) => console.log(error))
    .finally(() => console.log("Requisição Concluída"))
