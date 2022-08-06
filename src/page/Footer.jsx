import { Container, Grid, Link, ListItem, ListItemText } from '@mui/material'
import React from 'react'
import logofooter from '../img/logo-footer.svg'
export const Footer = () => {
  return (
    <div className='bg-dark bg-gradient text-white'>
        <Container>
        <Grid container   spacing={2} className="tex_footer">
            <Grid item xs={8}>
                <img className='logo-footer' src={logofooter} alt="logo de pokedex" />
            </Grid>
            <Grid item xs={12}>
                Esta aplicacion web de pokedex se realizo con la finalidad de practicar y seguir aprendiendo sobre React y el consumo de Apis(PokeApi). Si te agrada regalame una estrella en <Link href="https://github.com/jherry-Ponce/PokeApiReact" className='text-white' underline="hover" target="_blank" ><b> GitHub</b></Link>
            </Grid>
            <Grid item xs={12}>
             <h4> Tools</h4>
            </Grid>
            <Grid item md={6} xs={12} className="py-0" >
                <ListItem >
                    <ListItemText primary={". React JS"}  />
                    <ListItemText primary={". Material UI"}  />
                    <ListItemText primary={". Node"}  />
                </ListItem>
            </Grid>
            <Grid item md={6} xs={12} className="py-0">
                <ListItem>
                    <ListItemText primary={". PokeApi"}  />
                    <ListItemText primary={". GitHub"}  />
                    <ListItemText primary={". Vercel"}  />
                </ListItem>
            </Grid>
        </Grid>
        </Container>
    </div>
  )
}
