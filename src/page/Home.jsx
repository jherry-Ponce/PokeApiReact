import { useEffect } from "react";
import { useState } from "react";
import { getDataFromPokemon } from "../service/pokeapi";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { Cardcomponent } from "../components/Cardcomponent";
import { Modalcomponent } from "../components/Modalcomponent";
import logofooter from '../img/logo-footer.svg'
const Home = (props) => {
  //variable que guarda la lista
  const [pokemones, setPokemon] = useState([]);
  const [Siguiente, setSiguiente] = useState("");
  const [Atras, setBack] = useState([]);

  const fetchPokemonList = async (data) => {
    const listPokemones = await getDataFromPokemon(data);
    setPokemon(listPokemones.results);
    setSiguiente(listPokemones.next);
    setBack(listPokemones.previous);
    if (props.valor) {
      filtar(listPokemones.results);
    }
  };

  //TODO: useEffect se coloca un array vacio para evitar un bucle infinito
  //la funcion que esta dentro del usseefect se llama n veces de forma infinita
  const filtar = async (dato) => {
    let rsultado = dato
      .map((nombre) => nombre)
      .filter((inf) => {
        if (inf.name.includes(props.valor.toLowerCase())) {
          return inf;
        }
      });
    setPokemon(rsultado);
  };

  useEffect(() => {
    if (props.valor)
      fetchPokemonList("https://pokeapi.co/api/v2/pokemon?limit=999");
    else fetchPokemonList();
  }, [props.valor]);

  const next = () => fetchPokemonList(Siguiente);
  const atrass = () => fetchPokemonList(Atras);

  return (
    <>
      <div className="d-flex justify-content-center mt-3 mb-3 text-danger text-uppercase fs-1">
        <img className="logo-home" src={logofooter} alt="logo" />
      </div>
      <Grid container justifyContent="center" alignItems="center" gap={3}>
        {pokemones.map((info, index) => (
          <div key={index}>
            <Grid item xs={12}>
              <Card sx={{ maxWidth: 300 }} >
                <Cardcomponent nombre={info.name} url={info.url} />
                <CardContent>
                  <Typography gutterBottom variant="h4" component="div">
                    {info.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <Modalcomponent nombre={info.name} url={info.url} />
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </div>
        ))}
      </Grid>
      <div className="container d-flex justify-content-center mt-3 mb-3">
        {props.valor ? (
          " "
        ) : (
          <div>
            <button className="btn btn-primary m-3" onClick={atrass}>
              Anterior
            </button>
            <button className="btn btn-primary m-3" onClick={next}>
              Siguiente
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
