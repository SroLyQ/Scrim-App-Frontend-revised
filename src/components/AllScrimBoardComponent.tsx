import ScrimPostDummies from "../dummies/scrimFindingPostDummies"
import ScrimFindPost from "./ScrimFindPostComponent"

const AllScrimBoard : React.FC = () =>{
    return (
        <div className="h-full w-full bg-zinc-500 overflow-y-scroll border-black border-[2px]">
            {
                ScrimPostDummies.map((element:any) => (
                    <ScrimFindPost postData={element}/>
                    
                ))
            }
        </div>
    )
}

export default AllScrimBoard