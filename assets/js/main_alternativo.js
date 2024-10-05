const cartao = document.querySelector('.pokemon-buscado')
const pokeName = document.querySelector('.nome_escolhido')
const pokeID = document.querySelector('.pokeid_escolhido')
const statsPoke = document.querySelector('.info-dos-pokemons.escolhido')
const imagePoke = document.querySelector('.image_pokemon')
const form = document.querySelector('.form')
const inputSearch = document.querySelector('#search')

const fetchApiPokemon = async (pokemon) => {

    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

    const data = await APIResponse.json()

    return data;
}

const renderPoke = async (pokemon) => {

    const data = await fetchApiPokemon(pokemon);

    cartao.style.display = "block";
        pokeName.innerHTML = data.name.charAt(0).toUpperCase() + data.name.slice(1).toLowerCase()
        pokeID.innerHTML = `#${data.id}`
        statsPoke.innerHTML = data['types']['0']['type']['name']
        imagePoke.src = data['sprites']['other']['official-artwork']['front_default']
        inputSearch.value = '';
}
form.addEventListener('submit', (event) => {

    event.preventDefault();
    
    renderPoke(inputSearch.value.toLowerCase())

})
