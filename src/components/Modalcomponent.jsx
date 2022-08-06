import { useState } from "react";
import Chip from "@mui/material/Chip";
import {
  Button,
  Dialog,
  DialogContent,
  Grid,
  Slider,
} from "@mui/material";
import "../styles.css";
import { getDataFromPokemon } from "../service/pokeapi";
export const Modalcomponent = (props) => {
  const [abrir, setAbrir] = useState(false);
  const [pokemonData, setPokemonData] = useState({});
  // como se lee un atributo que estamos recibiendo del componente
  // padre
  const fetchDetailFromPokemon = async () => {
    const pokemon = await getDataFromPokemon(props.url);
    setPokemonData(pokemon);
  };

  const handleOpenDialog = async () => {
    if (!abrir) {
      await fetchDetailFromPokemon();
    }
    setAbrir(!abrir);
  };
  let color = "";
  return (
    <div className="w-100 container">
      <Button onClick={handleOpenDialog} variant="contained" color="primary">
        Detalle del pokemon
      </Button>
      <Dialog
        open={abrir}
        onClose={handleOpenDialog}
        fullWidth="md"
        maxWidth="md"
      >
        <DialogContent>
          {/* Esto extrar los keys de un objeto */}
          {Object.keys(pokemonData).length > 0 && (
            <div>
              <h2 className="name-pokemon text-danger text-center text-md-start ">{props.nombre}</h2>
              <Grid container>
                <Grid item md={6}>
                    <div className=" mb-2">
                      <h4>Habilidades</h4>
                      {pokemonData.abilities.map((abilities) => (
                        <Chip
                          className="bg-primary"
                          label={abilities.ability.name}
                          color="primary"
                          sx={{ marginRight: 2 }}
                        />
                      ))}
                    </div>
                    <div className="">
                      <h4>Datos</h4>
                      {pokemonData.types.map((type) => (
                        <Chip
                          className="bg-warning"
                          label={type.type.name}
                          sx={{ marginRight: 2 }}
                        />
                      ))}
                      <Chip
                        className="bg-warning"
                        label={`${pokemonData.height / 10} m`}
                        sx={{ marginRight: 2 }}
                      />
                      <Chip
                        className="bg-warning"
                        label={`${pokemonData.weight / 10} kg`}
                        sx={{ marginRight: 2 }}
                      />
                    </div>
                    <figure>
                      <img
                        className=""
                        width={300}
                        src={pokemonData.sprites.other["home"].front_default}
                        alt={props.nombre}
                      />
                    </figure>
                 
                </Grid>
                <Grid item xs={12} sm={12} md={6}   >
                  <div className="w-100">
                    <h4>Puntos de base</h4>
                      {pokemonData.stats.map((stats) => (
                        <div>
                          <h5 className="text-primary">{stats.stat.name}</h5>
                          {stats.stat.name === "attack" ||
                          stats.stat.name === "special-attack"
                            ? (color = "text-danger")
                            : stats.stat.name === "defense" ||
                              stats.stat.name === "special-defense"
                            ? (color = "text-info")
                            : stats.stat.name === "speed"
                            ? (color = "text-success")
                            : (color = "text-warning")}
                          <Slider
                            aria-label={stats.stat.name}
                            className={color}
                            disabled
                            valueLabelDisplay="on"
                            defaultValue={stats.base_stat}
                          />
                        </div>
                      ))}
                  </div>
                </Grid>
              </Grid>
            </div>
          )}
          <Button onClick={handleOpenDialog}>Cerrar</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};
