import HeaderComponent from "../components/HeaderComponent"
import YourScimBoard from "../components/YourScrimBoardComponent"

const HomePage: React.FC = () => {
    return(
        <div className="">
            <HeaderComponent />
            <div className="flex flex-rows">
                <div className="basis-1/5 bg-gray-400 h-[92vh] w-[100%]"> </div>
                <div className="basis-3/5 bg-white h-[92vh]">
                    <h1 className="text-4xl font-bold pl-[5%] pt-[5%]"> Your Scrim</h1>
                    <div className="h-[70%] w-[90%] ml-[5%] mt-[4%]">
                        <YourScimBoard />
                    </div>
                </div>
                <div className="basis-1/5 bg-gray-400 h-[92vh]"> </div>
            </div>
        </div>
    )
}

export default HomePage