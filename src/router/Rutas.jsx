
import { Routes, Route } from "react-router-dom";
import { Result } from "../components/Result";
import Header from "../page/Header";
import Home from "../page/Home";
export const Rutas=()=>{
    return(
        <>
      
  
        <Header/>
        <Routes>
            <Route path="PokeApiReact/" element={<Home/>}/>
            <Route path="PokeApiReact/Resul" element={<Home/>}/>
            <Route path="PokeApiReact/Resul/:id" element={<Result/>}/>
            <Route path="*" element={<div>  <q>ue haces wey?</q></div> } />
        </Routes>
    
      
        </>
        
    )
}