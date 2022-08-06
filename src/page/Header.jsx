import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../styles.css';
import { useState } from "react";
import { Link} from 'react-router-dom'
import pokebolas from '../img/pokebolas.png'

const Header=()=>{
     const [dato, setDato]=useState(" ")
     const handleCaptura =  (e) =>{
      const text=document.querySelector("input").value;
        setDato(text);
    }

    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-warning bg-gradient">
        <div className="container">
          <Link className="navbar-brand" to="PokeApiReact/"><img src={pokebolas} className="logo" alt="logo"/></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/"><h1>Pokemon</h1></Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Buscar Pokemon"  aria-label="Search" onChange={handleCaptura}  />
                 <Link  to={`Resul/${dato}`}> <button  className="btn btn-danger">Buscar</button> </Link>
            </form>
          </div>
        </div>
      </nav>
    </>
    )
}
export default Header;