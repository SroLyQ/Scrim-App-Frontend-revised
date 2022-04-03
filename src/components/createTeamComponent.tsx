import CreateTeamForm from "./createTeamFormComponent"
import MemberForm from "./MemberForm"

const CreateTeamComponent : React.FC = () => {
    return(
        <div>
            <div className="flex w-full bg-red-700 h-[100px] mt-[4%] pl-[4%] items-center">
                <h1 className="text-4xl font-bold">
                    Create Your Team
                </h1>
            </div>
            <div className="flex w-full h-[680px] bg-blue-700 items-center justify-center">
                <div className="flex flex-col w-[98%] h-[98%] bg-green-700">
                    <div className="w-full h-[50%] ">
                        <CreateTeamForm/>
                    </div>
                    <div className="bg-gray-700 w-full h-[50%] ">
                        <MemberForm/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateTeamComponent