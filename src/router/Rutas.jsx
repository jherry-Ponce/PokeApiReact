
import { Routes, Route } from "react-router-dom";
import { Result } from "../components/Result";
import { Footer } from "../page/Footer";
import Header from "../page/Header";
import Home from "../page/Home";
export const Rutas=()=>{
    return(
        <>
      
  
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Resul" element={<Home/>}/>
            <Route path="/Resul/:id" element={<Result/>}/>
            <Route path="/*" element={<div>  <q>ue haces wey?</q></div> } />
        </Routes>
        <Footer/>
    
      
        </>
        
    )
}