// parseURL
// Will return the pokemon's id from the provided url
function parseUrl (url) {
    return url.substring(url.substring(0, url.length - 2).lastIndexOf('/') + 1, url.length - 1)
  }


function htmlTemplate(pokemons) {
const html = []
console.log(pokemons)
for(const pokemon of pokemons){
    // console.log(pokemon)
        let id = parseUrl(pokemon.url)
                html.push(`
                <div class="box">
                    <div class="img-n-name">
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png

                        " alt="pokemon">
                        <pre class="name">
                        ${pokemon.name}
                        </pre>
                        <div class="desc">
                        </div>
                    </div>
            
                    <div class="box-bottom">     
                        <button class="catch catch-btn" data-pokemonname = "${pokemon.name}" data-pokemonurl = "${pokemon.url}">Pokeball!</button>

                        <button class="catch pop-up" data-pokemonname = "${pokemon.name}" data-pokemonurl = "${pokemon.url}">...</button>
                    </div>
                </div>
                `)


            }
        container.innerHTML = html.join('')

        }
//fetch
async function fetchData (url) {
    console.log(url)
    const response = await fetch(url)

    const json = await response.json();
    moreButton.dataset.next = json.next
    // document.getElementById('name').innerHTML = json.name;
    // console.log(json);
    htmlTemplate(json.results)      

  };


fetchData('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');




const container = document.getElementById('container')


let boolean = false

container.addEventListener('click', function (event) {
    const catchButton = event.target
    const pokeBox = event.target.closest('.box')
    if(event.target.classList.contains('catch-btn')){
        
        console.log(event.target)
        pokeBox.classList.toggle("caught");
        

        let savedPokemons = JSON.parse(localStorage.getItem("Caught-Pokemons")) || []
        const pokemon = {}
        pokemon.name =  event.target.dataset.pokemonname
        pokemon.url = event.target.dataset.pokemonurl

        if(!savedPokemons.find(poke => pokemon.name == poke.name)){
            savedPokemons.push(pokemon)
        }
        else{
            console.log(pokemon)
            console.log(savedPokemons.filter(poke => pokemon.name !== poke.name))
            savedPokemons = savedPokemons.filter(poke => pokemon.name !== poke.name)
            
        }
        
        if(boolean){
        htmlTemplate(savedPokemons)
        }
        
        localStorage.setItem("Caught-Pokemons",JSON.stringify(savedPokemons))
    }

});

const caughtPageIcon = document.querySelector('.icon')

caughtPageIcon.addEventListener('click', function(){
    boolean = true
    
    let savedPokemons = JSON.parse(localStorage.getItem('Caught-Pokemons'))
    if(savedPokemons){
        htmlTemplate(savedPokemons)
    }
    else{
        container.innerHTML = "Sorry, no Pokemons"
    } 

});



//second async
async function fetchInfo(id) {
    
    const responseInfo = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)

    const jsonInfo = await responseInfo.json(info);
    
    const popInfo = document.querySelector('.desc')
    popInfo.push("test")


  };

  

//pop up
container.addEventListener('click', function (event) {
    const popButton = event.target
    const pokeBox = event.target.closest('.box')
    const allBox = document.getElementsByClassName('box')
    const footer = document.querySelector("footer")

if(event.target.classList.contains('pop-up')){

    container.classList.toggle("full");
    pokeBox.classList.toggle("overlay");
    pokeBox.classList.toggle("info");
    footer.classList.toggle("hidden");
    caughtPageIcon.classList.toggle("hidden");

    
    
    for (let i = 0; i < allBox.length; i++) {
        allBox[i].classList.toggle("hidden");
    }


    
    
    const popInfo = document.querySelector('.overlay')
    html.push("hello");
    
    
}
});


//see more button
const moreButton = document.getElementById("more")

moreButton.addEventListener('click', function() {
console.log(moreButton.dataset.next)
fetchData (moreButton.dataset.next) 

});


