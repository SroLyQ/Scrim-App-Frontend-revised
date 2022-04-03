
import HeaderComponent from "../components/HeaderComponent";
import infoData from "../dummies/profileInfo"


const ProfilePage : React.FC = () => {

    return (
        <div>
            <HeaderComponent/>
            <div className="flex flex-rows">
             
            <div className="basis-[10%] bg-gray-400 h-[93vh] w-[100%]"/> 
                <div className="basis-[80%] h-[93vh] ">
                    <div className=" fixed	h-[500px] w-[70%] bg-gray-300 mt-[100px]  ml-[5%] rounded-lg">
                        <div className="ml-[20%] mt-[2%]">
                            <p className='w-[300px] text-2xl pt-[26px]'>IGN : {infoData.inGameName} </p>
                            <p className='w-[300px] text-2xl pt-[26px]'>Name : {infoData.Name} </p>
                            <p className='w-[300px] text-2xl pt-[26px]'>Rank : {infoData.Rank} </p>
                            <p className='w-[300px] text-2xl pt-[26px]'>team : {infoData.teamName} </p>
                        </div>
                    </div>

                    <div className="ml-[2%] mt-[2%] w-[200px]">
                        <img src={infoData.profileImg} className = "absolute rounded-full border-[5px] border-rose-400 shadow-sm w-[200px]"/>
                    </div>


                </div>
                <div className="basis-[10%] bg-gray-400 h-[93vh] w-[100%]"/>
            </div>
            
            

        </div>
        
    )
}

export default ProfilePage