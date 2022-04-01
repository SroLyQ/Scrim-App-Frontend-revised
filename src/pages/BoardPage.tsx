import AllScrimBoard from "../components/AllScrimBoardComponent"
import HeaderComponent from "../components/HeaderComponent"

const BoardPage : React.FC = () =>{
    return(
        <div>
            <div>
                <HeaderComponent/>
                <div className="flex flex-rows">
                    <div className="basis-1/5 bg-gray-400 h-[92vh] w-[100%]"> </div>
                    <div className="basis-3/5 bg-white h-[92vh]">
                        <h1 className="text-4xl font-bold pl-[5%] pt-[5%]">All Scrim Finding Post</h1>
                        <div className="h-[500px] w-[820px] ml-[5%] mt-[4%]">
                            <AllScrimBoard/>
                        </div>
                    </div>
                    <div className="basis-1/5 bg-gray-400 h-[92vh]"> </div>
                </div>
            </div>
        </div>
    )
}
export default BoardPage