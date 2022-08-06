
const BASE_URL="https://pokeapi.co/api/v2/pokemon";


export const getDataFromPokemon = async(url =BASE_URL)=>{
    const response = await fetch(url);
    const data = await response.json();
    try {
        return data;
    } catch (error) {
        console.log(error.message)
    }
 }