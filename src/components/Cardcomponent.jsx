import { CardMedia } from "@mui/material"
import { useEffect } from "react";
import { useState } from "react";
import { getDataFromPokemon } from "../service/pokeapi";
import descarga from '../img/descarga.jpg'

export const Cardcomponent=(props)=>{
    const [pokemonImg, setPokemonImg] = useState({});
    const fetchDetailFromPokemon = async () => {
        const pokemon = await getDataFromPokemon(props.url);
        console.log(props.nombre);
        setPokemonImg(pokemon.sprites.other["official-artwork"]
        .front_default);
      };
      useEffect(()=>{
        fetchDetailFromPokemon();
    },[props.nombre])
    return(
                <>
                    {
                    pokemonImg === null ?
                    <CardMedia
                    component="img"
                    image={descarga}
                    alt={props.nombre}
                    className="pokemon-fail"
                    />
                 :
                 <CardMedia
                 component="img"
                 width="345"
                 height="345"
                 image={pokemonImg}
                 alt={props.nombre}
                 />
                }
                </>
    )
}