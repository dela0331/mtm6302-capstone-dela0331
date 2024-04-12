

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