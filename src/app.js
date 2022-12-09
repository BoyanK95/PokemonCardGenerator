import { getPokeData } from './pokeapi.js'

const card = document.getElementById('card')
const btn = document.getElementById('btn')

btn.addEventListener('click', getPokeData)
window.addEventListener('load',getPokeData)

