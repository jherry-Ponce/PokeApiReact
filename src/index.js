
import ReactDOM from 'react-dom/client';
import { getDataFromPokemon } from './service/pokeapi';
import Home from './page/Home';
import Header  from './page/Header';
import { BrowserRouter } from 'react-router-dom';
import { Principal } from './Principal';
import './styles.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
    <Principal/>
    </BrowserRouter>
  
  </>

  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

