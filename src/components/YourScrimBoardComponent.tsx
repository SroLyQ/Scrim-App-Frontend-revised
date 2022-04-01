import dummiesMatch from "../dummies/matchDummies"
import YourScrimMatch from "./YourScrimMatchComponent"


const YourScimBoard : React.FC = () => {
            
    return(
        <div className="h-full w-full bg-zinc-500 border-black border-2">
            <div className="overflow-y-scroll h-full">
                {
                    dummiesMatch.map((element:any)=>(
                        <YourScrimMatch matchData={element}/>
                    ))
                }
            </div>
        </div>
    )

}

export default YourScimBoard