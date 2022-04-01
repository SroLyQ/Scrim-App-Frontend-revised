import logo_placeHolder from '../pic/placeholder.jpeg'
import arrow_icon from '../pic/arrow.png'
const ScrimFindPost: React.FC = () =>{
    var right_icon = 'https://previews.123rf.com/images/asmati/asmati1706/asmati170605914/80929987-positive-symbol-plus-sign-vector-white-icon-with-soft-shadow-on-transparent-background-.jpg'
    var already:boolean = true 
    if(already){
        /**change icon */
    }

    return(
        <div className='flex flex-rows mt-[1%] '>
            <div className={"flex flex-rows bg-white h-[90px] w-[745px] ml-[1%] border-l-[20px] items-center"}>
                <div className='flex flex-rows align-middle items-center'>
                    <img src={logo_placeHolder} className='h-[60px] w-[60px] ml-[14px] '/>
                    <div className='flex  h-[40px] w-[200px] items-center'>
                        <label className='text-3xl pl-[14px] break-words text-center'> Team Name 2</label>
                    </div>
                    <label className='h-full w-[150px] text-2xl text-center'> Rank: Immortal 3</label>
                    <div className='flex  h-[40px] w-[140px] items-center'>
                        <label className='text-2xl  break-words text-center'> Time: 17:00 GMT +7</label>
                    </div>
                    <div className='flex  h-[40px] w-[140px] items-center'>
                        <label className='text-2xl  break-words text-center'> Date: 22/02/2022</label>
                    </div>
                </div>
            </div>
            <div className='flex h-[90px] w-[40px] items-center bg-black'>
                <img src={right_icon} className='w-full'/>
            </div>
        </div>
    )

}

export default ScrimFindPost
