


const getPokemon = () => {
    const url = "https://pokeapi.co/api/v2/pokemon/1"
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            pokemonName.innerHTML = data.sys.sunrise;
        })
}
getPokemon()