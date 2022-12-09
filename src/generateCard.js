import { html, nothing, render } from "../node_modules/lit-html/lit-html.js";

const rootCard = document.getElementById("card");

export function generateCard(data) {
  const hp = data.stats[0].base_stat;
  const imgSrc = data.sprites.other.dream_world.front_default;
  const pokeName = data.name;
  const statAttack = data.stats[1].base_stat;
  const statDefence = data.stats[2].base_stat;
  const statSpeed = data.stats[5].base_stat;
  
  const typeOne = data.types[0].type.name
  const typeTwo = data.types[1]?.type.name 
  
  

  const pokemon = {
    hp,
    imgSrc,
    pokeName,
    statAttack,
    statDefence,
    statSpeed,
    typeOne,
    typeTwo
  }

  render(pokeCardTemplate(pokemon), rootCard)
}

const pokeCardTemplate = (pokemon) => html` 
<p class="hp">
    <span>HP</span>
    ${pokemon.hp}
  </p>
  <img src=${pokemon.imgSrc} />
  <h2 class="poke-name">${pokemon.pokeName}</h2>
  <div class="types">
    <span>${pokemon.typeOne}</span>
    ${pokemon.typeTwo ? html`<span>${pokemon.typeTwo}</span>` : nothing}
  </div>
  <div class="stats">
    <div>
      <h3>${pokemon.statAttack}</h3>
      <p>Attack</p>
    </div>
    <div>
      <h3>${pokemon.statDefence}</h3>
      <p>Deffence</p>
    </div>
    <div>
      <h3>${pokemon.statSpeed}</h3>
      <p>Speed</p>
    </div>
  </div>`;
