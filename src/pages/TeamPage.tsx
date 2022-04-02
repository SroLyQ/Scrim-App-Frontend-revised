import { useParams } from "react-router-dom"
import HeaderComponent from "../components/HeaderComponent";



const TeamPage : React.FC = () =>{
    let {id} = useParams();
    return (
        <HeaderComponent/>
    )
}

export default TeamPage