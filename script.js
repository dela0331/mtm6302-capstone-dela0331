const container = document.getElementById('container')


for (let i = 0; i < 20; i++) {
    container.innerHTML += `
    <div class="box" id="box">
                <div class="img-n-name">
                    <img src="assets/square.png" alt="pokemon">
                    <h2>Pokemon Name</h2>

                    <dl>
                        <dt>Number</dt>
                        <dd>...</dd>

                        <dt>Type</dt>
                        <dd>...</dd>

                        <dt>Species</dt>
                        <dd>...</dd>
                    </dl>
                </div>
                <div class="box-bottom">
                    <p>description...</p>

                    <button class="catch" id="catch">Catch</button>
                </div>
            </div>
    `
  }

let catchButton = document.getElementById('catch')
let pokeBox = document.getElementById('box')

catchButton.addEventListener('click', function(){

    pokeBox.classList.toggle("caught");

    if(catchButton.innerHTML === "Catch"){
        catchButton.innerHTML = "Release"
    }else{
        catchButton.innerHTML = "Catch"
    }

});