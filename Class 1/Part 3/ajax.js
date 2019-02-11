const url = 'https://pokeapi.co/api/v2/pokemon/';

let pokemons;

$(() => {
    $('#load').on("click", () => {
        getData(url);
    })
    console.log(pokemons)
})

let config = {
    url,
    type: 'GET',
    success: pokemons =>{
        pokemons = pokemons.results;
        showPokemons(pokemons);
    }
}

function getData(url) {
    config.url = url;
    $.ajax(config);
}

function showPokemons(pokemons) {
    $('#name').html('')
    for (const pokemon of pokemons) {
        $('#name').append(`
            <li>${pokemon.name}</li>
        `);
    }
}