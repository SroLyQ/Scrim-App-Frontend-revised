import { useNavigate, useParams } from "react-router-dom"
import HeaderComponent from "../components/HeaderComponent";
import CreateTeamComponent from "../components/createTeamComponent";
import { useRef } from "react";


const TeamPage : React.FC = () =>{
    let {id} = useParams();
    let navigate=useNavigate()
    const createTeamClickHandler = () =>{
        var path:string = './../createTeam'
        navigate(path)
    }

    if(id === 'noteam'){
        return(
            <div>
                <HeaderComponent/>
                <div className="flex flex-rows">
                    <div className="basis-1/5 bg-gray-400 h-[92vh] w-[100%]"> </div>
                    <div className="basis-3/5 bg-white h-[92vh] text-center">
                        <div className="flex flex-col justify-center items-center h-full w-full">
                            <div className="bg-red-700">
                                <h1 className="text-4xl font-bold ">You are currently LFT</h1>
                                <div className="flex flex-rows " >
                                    <button className="bg-blue-700" onClick={createTeamClickHandler}>
                                        <h1 className="text-4xl font-bold mt-[4%]">Create Team </h1>
                                    </button>
                                    <h1 className="text-4xl font-bold mt-[4%]">&nbsp;or&nbsp;</h1>
                                    <button className="bg-blue-700">
                                        <h1 className="text-4xl font-bold mt-[4%]">Join Team </h1>
                                    </button>
                                    <h1 className="text-4xl font-bold mt-[4%]">&nbsp;Now!&nbsp;</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="basis-1/5 bg-gray-400 h-[92vh]"> </div>
                </div>
            </div>
        )
    }
    else if(id == 'createTeam'){
        return (
            <div>
                <HeaderComponent/>
                <div className="flex flex-rows">
                    <div className="basis-1/5 bg-gray-400 h-[92vh] w-[100%]"> </div>
                    <div className="basis-3/5 bg-white h-[92vh]">
                        <CreateTeamComponent/>
                    </div>
                    <div className="basis-1/5 bg-gray-400 h-[92vh]"> </div>
                </div>
            </div>
        )
    }
    return (
        <HeaderComponent/>
    )
}

export default TeamPage