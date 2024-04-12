const $mainCont = document.getElementById('container')
const $caughtCont = document.getElementById('caught-box')

let pokemons = []
let caught = []


//caught pokemon function
function buildCaughtList() {
    const ls = localStorage.getItem('caught')
    if(ls){
        caught = JSON.parse(ls)
    }

    const html = buildPokemon('caught')
    $caughtCont.innerHTML = html.join
}

//build pokemon list function
function buildPokemon() {
    const html = []

    for(const pokemon of pokemons){
        html.push(`
        <a href="#" class="book col-4 mb-3" data-id="${pokemon.id}">
        <img src="${pokemon.image}" alt="${pokemon.title}" class="img-fluid">
        </a>`)

    }
    return html
}

//fetch
fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
    .then(response => response.json())
    .then(data => console.log(data))

//async await
async function fetchPokemons (id) {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0')

    pokemons = await response.json();
    const html = buildPokemon(pokemons)
    $mainCont.innerHTML = html.join('')
    //maybe change $mainCont to let variable with box container and place html inside the container//
  };


//pokemon box container template
let pokeBox =  `    
<div class="box " id="box">
<div class="img-n-name" id="imgAndName">
    <img src='${pokemons.sprite}' alt="pokemon">
    <h2>${pokemons.name}</h2>
</div>

<div class="box-bottom">     
    <button class="catch" id="catch">Catch</button>
</div>
</div>`

for (let i = 0; i < 20; i++) {
    $mainCont.innerHTML = pokeBox;
}

// pokemon catch / release button
$mainCont.addEventListener('click', function(e){
    e.preventDefault()
    //???????????????
})