import { useLocation, useNavigate } from "react-router-dom"
import userIcon from '../pic/user_icon_white.png'

const HeaderComponent : React.FC = () =>{
        
        const location = useLocation()
        let navigate = useNavigate()
        var path:string = ''
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
            path='/team'
            navigate(path)
        }

        if(location.pathname === '/'){
            return(
                <div className="flex flex-rows bg-grayHeader h-[60px]">
                    <div className="bg-gray-300 h-[50px] w-[50px] mt-[5px] ml-[2%]">
                        logo
                    </div>
                    <div className="flex flex-col bg-grayHeader-700 ml-[2%] w-[160px] h-[100%] text-white border-l-[2px]  border-r-[2px] border-[#3f3f46] border-b-[4px] border-b-hardRed text-center place-items-center hover:border-b-[6px] border-b-lightRed ">
                        <button className=" h-[100%] w-[100%] border-box " onClick={homeClickHandler} >
                                <label className="h-[50%] w-[50%] mt-[15px] hover:cursor-pointer"> Home </label>
                        </button>
                    </div>
                    <div className="flex flex-col bg-grayHeader-700 ml-[2%] w-[160px] h-[100%] text-white border-l-[2px]  border-r-[2px] border-[#3f3f46] text-center place-items-center hover:border-b-[6px] border-b-lightRed">
                        <button className=" h-[100%] w-[100%] border-box " onClick={boardClickHandler} >
                                <label className="h-[50%] w-[50%] mt-[15px] hover:cursor-pointer"> Board </label>
                        </button>
                    </div>
                    <div className="flex flex-col bg-grayHeader-700 ml-[2%] w-[160px] h-[100%] text-white border-l-[2px]  border-r-[2px] border-[#3f3f46] text-center place-items-center hover:border-b-[6px] border-b-lightRed">
                    <button className=" h-[100%] w-[100%] border-box " onClick={boardClickHandler} >
                                <label className="h-[50%] w-[50%] mt-[15px] hover:cursor-pointer"> Team </label>
                        </button>
                    </div>
                    <div className="ml-[50%]">
                        <img src={userIcon} className="h-[80%] mt-[10%] ml-[40%] rounded-full"/>
                    </div>
                </div>
            )
        }
        else if(location.pathname === '/board'){
            return(
                <div className="flex flex-rows bg-grayHeader h-[60px]">
                    <div className="bg-gray-300 h-[50px] w-[50px] mt-[5px] ml-[2%]">
                        logo
                    </div>
                    <div className="flex flex-col bg-grayHeader-700 ml-[2%] w-[160px] h-[100%] text-white border-l-[2px]  border-r-[2px] border-[#3f3f46] text-center place-items-center hover:border-b-[6px] border-b-lightRed">
                        <label className="h-[50%] w-[50%] mt-[15px]"> Home </label>
                    </div>
                    <div className="flex flex-col bg-grayHeader-700 ml-[2%] w-[160px] h-[100%] text-white border-l-[2px]  border-r-[2px] border-[#3f3f46] border-b-[4px] border-b-hardRed text-center place-items-center hover:border-b-[6px] border-b-lightRed">
                        <label className="h-[50%] w-[50%] mt-[15px]"> Board </label>
                    </div>
                    <div className="flex flex-col bg-grayHeader-700 ml-[2%] w-[160px] h-[100%] text-white border-l-[2px]  border-r-[2px] border-[#3f3f46]  text-center place-items-center hover:border-b-[6px] border-b-lightRed">
                        <label className="h-[50%] w-[50%] mt-[15px]"> Team </label>
                    </div>
                    <div className="ml-[50%]">
                        <img src={userIcon} className="h-[80%] mt-[10%] ml-[40%] rounded-full"/>
                    </div>
                </div>
            )
        }
        else if(location.pathname.includes('team')){
            return(
                    <div className="flex flex-rows bg-grayHeader h-[60px]">
                        <div className="bg-gray-300 h-[50px] w-[50px] mt-[5px] ml-[2%]">
                        logo
                        </div>
                        <div className="flex flex-col bg-grayHeader-700 ml-[2%] w-[160px] h-[100%] text-white border-l-[2px]  border-r-[2px] border-[#3f3f46] text-center place-items-center hover:border-b-[6px] border-b-lightRed">
                            <label className="h-[50%] w-[50%] mt-[15px]"> Home </label>
                        </div>
                        <div className="flex flex-col bg-grayHeader-700 ml-[2%] w-[160px] h-[100%] text-white border-l-[2px]  border-r-[2px] border-[#3f3f46] text-center place-items-center hover:border-b-[6px] border-b-lightRed">
                            <label className="h-[50%] w-[50%] mt-[15px]"> Board </label>
                        </div>
                        <div className="flex flex-col bg-grayHeader-700 ml-[2%] w-[160px] h-[100%] text-white border-l-[2px]  border-r-[2px] border-[#3f3f46] border-b-[4px] border-b-hardRed text-center place-items-center hover:border-b-[6px] border-b-lightRed">
                            <label className="h-[50%] w-[50%] mt-[15px]"> Team </label>
                        </div>
                        <div className="ml-[50%]">
                            <img src={userIcon} className="h-[80%] mt-[10%] ml-[40%] rounded-full"/>
                        </div>
                    </div>
            )
        }
        else{
            return(
                <div className="flex flex-rows bg-grayHeader h-[60px]">
                    <div className="bg-gray-300 h-[50px] w-[50px] mt-[5px] ml-[2%]">
                    logo
                    </div>
                    <div className="flex flex-col bg-grayHeader-700 ml-[2%] w-[160px] h-[100%] text-white border-l-[2px]  border-r-[2px] border-[#3f3f46] text-center place-items-center hover:border-b-[6px] border-b-lightRed">
                        <label className="h-[50%] w-[50%] mt-[15px]"> Home </label>
                    </div>
                    <div className="flex flex-col bg-grayHeader-700 ml-[2%] w-[160px] h-[100%] text-white border-l-[2px]  border-r-[2px] border-[#3f3f46] text-center place-items-center hover:border-b-[6px] border-b-lightRed">
                        <label className="h-[50%] w-[50%] mt-[15px]"> Board </label>
                    </div>
                    <div className="flex flex-col bg-grayHeader-700 ml-[2%] w-[160px] h-[100%] text-white border-l-[2px]  border-r-[2px] border-[#3f3f46] text-center place-items-center hover:border-b-[6px] border-b-lightRed">
                        <label className="h-[50%] w-[50%] mt-[15px]"> Team </label>
                    </div>
                    <div className="ml-[50%]">
                        <img src={userIcon} className="h-[80%] mt-[10%] ml-[40%] rounded-full"/>
                    </div>
                </div>
            )
        }
}

export default HeaderComponent