import Home from "../page/Home"
import {useParams} from 'react-router-dom';
export const Result=()=>{
    
    const id = useParams();
    console.log(id.id)
    return(
    <Home valor={id.id} />
    )
}