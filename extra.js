

//fetch
async function fetchData () {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0')

    const json = await response.json();
    document.getElementById('name').innerHTML = json.name;
    console.log(json);
  };

//alternate --
function fetchData(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0')
    .then(response => response.json())
    .then(data => console.log(data))
}


fetchData();




const container = document.getElementById('container')

//creates pokebox
function createPokeBox(){
    container.innerHTML += `
    <div class="box " id="box">
        <div class="img-n-name" id="imgAndName">
            <img src="assets/square.png" alt="pokemon">
            <pre id="name">
            
            </pre>
        </div>

        <div class="box-bottom">     
            <button class="catch" id="catch">Catch</button>
        </div>
    </div>
    `
}

// displays pokebox
for (let i = 0; i < 20; i++) {
    createPokeBox()
}


// pokemon catch / release button
const catchButton = document.getElementById('catch')
const pokeBox = document.getElementById('box')

catchButton.addEventListener('click', function () {

    pokeBox.classList.toggle("caught");

    if (catchButton.innerHTML === "Catch") {
        catchButton.innerHTML = "Release"
    } else {
        catchButton.innerHTML = "Catch"
    }

});


//see more button
const moreButton = document.getElementById("more")

moreButton.addEventListener('click', function () {

    for (let i = 0; i < 20; i++) {
        container.innerHTML += `
        <div class="box " id="box">
        <div class="img-n-name">
            <img src="assets/square.png" alt="pokemon">
            <h2>Pokemon Name</h2>
        </div>

        <div class="box-bottom">     
            <button class="catch" id="catch">Catch</button>
        </div>
    </div>
        `
    }

});

// const $mainCont = document.getElementById('container')
// const $caughtCont = document.getElementById('caught-box')

// let pokemons = []
// let pokemon = {}
// let caught = []


// //caught pokemon function
// function buildCaughtList() {
//     const ls = localStorage.getItem('caught')
//     if(ls){
//         caught = JSON.parse(ls)
//     }

//     const html = buildPokemon('caught')
//     $caughtCont.innerHTML = html.join
// }

// //build pokemon list function
// function buildPokemon() {
//     const html = []

//     // for(const pokemon of pokemons){
//         html.push(`
//         <a href="#" class="book col-4 mb-3" data-id="${pokemon.id}">
//         <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png" alt="${pokemon.name}" class="img-fluid">
//         </a>`)

//     // }
//     return html
// }

// //fetch
// fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
//     .then(response => response.json())
//     .then(data => console.log(data))

// //async await
// async function fetchPokemons (id) {
//     const response = await fetch('https://pokeapi.co/api/v2/pokemon/1')

//     pokemon = await response.json();
//     const html = buildPokemon()
//     $mainCont.innerHTML = html.join('')
//     //maybe change $mainCont to let variable with box container and place html inside the container//
//   };

//   fetchPokemons()

// //pokemon box container template
// let pokeBox =  `    
// <div class="box " id="box">
// <div class="img-n-name" id="imgAndName">
//     <img src='${pokemons.sprite}' alt="pokemon">
//     <h2>${pokemons.name}</h2>
// </div>

// <div class="box-bottom">     
//     <button class="catch" id="catch">Catch</button>
// </div>
// </div>`

// for (let i = 0; i < 20; i++) {
//     $mainCont.innerHTML = pokeBox;
// }

// // pokemon catch / release button
// $mainCont.addEventListener('click', function(e){
//     e.preventDefault()
//     //???????????????
// })