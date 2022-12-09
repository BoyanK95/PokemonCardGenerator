import { generateCard } from "./generateCard.js"


const url = 'https://pokeapi.co/api/v2/pokemon/'


export function getPokeData() {
    // Generate random number between 1 - 150
    let id = Math.floor(Math.random() * 150) + 1
    
    // Combining url with id
    const finalUrl = url + id

    fetch(finalUrl)
    .then(responce => responce.json())
    .then(data => {
        generateCard(data)
    })
}

