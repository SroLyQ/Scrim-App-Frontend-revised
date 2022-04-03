import { useLocation, useNavigate } from "react-router-dom"
import userIcon from '../pic/user_icon_white.png'

const HeaderComponent : React.FC = () =>{
        
        const location = useLocation()
        let navigate = useNavigate()
        var path:string = ''
        var homeStyle,boardStyle,teamStyle : string =''
        var pathTeam:string = 'noteam' 
        console.log(location)

        const homeClickHandler = () => {
            console.log('Home')
            path='/'
            navigate(path)
        }

        const boardClickHandler = () => {
            console.log('Board')
            path='/board'
            navigate(path)
        }

        const teamClickHandler = () => {
            console.log('Team')
            // if('userHaveteam'){
            //     pathTeam='userTeam'
            // }
            path='/team/'+pathTeam
            navigate(path)
        }
        const profileClickHandler = () => {
            console.log('Profile')
            path='/Profile'
            navigate(path)
        }

        if(location.pathname === '/' ){
            homeStyle= 'border-b-[4px] border-b-hardRed'
            boardStyle = ''
            teamStyle = ''
        }
        else if(location.pathname === '/board'){
            homeStyle= ''
            boardStyle = 'border-b-[4px] border-b-hardRed'
            teamStyle = ''
        }
        else if(location.pathname.includes('/team/')){
            homeStyle= ''
            boardStyle = ''
            teamStyle = 'border-b-[4px] border-b-hardRed'
        }
        else{
            homeStyle= ''
            boardStyle = ''
            teamStyle = ''
        } 
        return(
                <div className="flex flex-rows bg-grayHeader h-[60px] w-full justify-center">
                    <div className="bg-gray-300 h-[50px] w-[50px] mt-[5px] ml-[2%]">
                        logo
                    </div>
                    <div className={"flex flex-col bg-grayHeader-700 ml-[2%] w-[160px] h-[100%] text-white border-l-[2px]  border-r-[2px] border-[#3f3f46] text-center place-items-center hover:border-b-[6px] hover:border-b-lightRed " + homeStyle}>
                        <button className=" h-[100%] w-[100%] border-box " onClick={homeClickHandler} >
                                <label className="h-[50%] w-[50%] mt-[15px] hover:cursor-pointer"> Home </label>
                        </button>
                    </div>
                    <div className={"flex flex-col bg-grayHeader-700 ml-[2%] w-[160px] h-[100%] text-white border-l-[2px]  border-r-[2px] border-[#3f3f46] text-center place-items-center hover:border-b-[6px] hover:border-b-lightRed " + boardStyle}>
                        <button className=" h-[100%] w-[100%] border-box " onClick={boardClickHandler} >
                                <label className="h-[50%] w-[50%] mt-[15px] hover:cursor-pointer"> Board </label>
                        </button>
                    </div>
                    <div className={"flex flex-col bg-grayHeader-700 ml-[2%] w-[160px] h-[100%] text-white border-l-[2px]  border-r-[2px] border-[#3f3f46] text-center place-items-center hover:border-b-[6px] hover:border-b-lightRed " + teamStyle}>
                    <button className=" h-[100%] w-[100%] border-box " onClick={teamClickHandler} >
                                <label className="h-[50%] w-[50%] mt-[15px] hover:cursor-pointer"> Team </label>
                        </button>
                    </div>
                    <div className="flex ml-[50%] justify-center items-center">
                            <div className="h-full w-[55px] flex items-center">
                            <button onClick={profileClickHandler} > <img src={userIcon} />
                            </button>
                            </div>
                        

                    </div>
                </div>
            )
}

export default HeaderComponent