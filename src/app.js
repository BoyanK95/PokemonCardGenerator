import { html, render } from '../node_modules/lit-html/lit-html.js'
import { getPokeData } from './pokeapi.js'

const card = document.getElementById('card')
const btn = document.getElementById('btn')

btn.addEventListener('click', getPokeData)
window.addEventListener('load',getPokeData)

