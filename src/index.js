document.addEventListener('DOMContentLoaded', () => {
  console.log(POKEMON)
  
  function renderAllPokemon() {
    POKEMON.forEach(function (pokemon){
      renderOnePokemon(pokemon)
    })
  }

  function renderAllPokemonFilter(value) {
    POKEMON.forEach(function (pokemon){
      if (pokemon.name.includes(value)){
        renderOnePokemon(pokemon) 
      }
    })
  }

  function renderOnePokemon(pokemon){
    card = document.createElement('div')
    card.className = 'pokemon-card'
    card.innerHTML = `
    <div class="pokemon-frame">
      <h1 class="center-text">${pokemon.name}</h1>
      <div class="pokemon-image">
        <img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src="${pokemon.sprites.front}" >
      </div>
    </div>
  `
  const collection = document.querySelector("div#pokemon-container")
  collection.append(card)
  }
  p = document.querySelector("p")
  p.remove()
  renderAllPokemon()

const input = document.querySelector("input#pokemon-search-input")

input.addEventListener("keyup", function(){
  const collection = document.querySelector("div#pokemon-container")
  collection.innerHTML = ''
  renderAllPokemonFilter(input.value)
} )

const collection = document.querySelector("div#pokemon-container")
collection.addEventListener("click", function(e){
  const pokemonc = e.target.closest("div.pokemon-card")
  const pokemon = POKEMON.find(pokeObj => pokeObj.id == e.target.dataset.id)
  console.log(pokemon)
  if (e.target.className === 'toggle-sprite') {
    const spriteSRC = pokemonc.querySelector('img')
    if (spriteSRC.src === pokemon.sprites.front) {
      spriteSRC.src = pokemon.sprites.back
    }else if (spriteSRC.src === pokemon.sprites.back ){
      spriteSRC.src = pokemon.sprites.front
    }
  }
})

})