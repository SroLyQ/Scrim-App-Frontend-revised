import { useParams } from "react-router-dom"
import HeaderComponent from "../components/HeaderComponent";



const ProfilePage : React.FC = () =>{
    let {id} = useParams();
    return (
        <HeaderComponent/>
    )
}

export default ProfilePage