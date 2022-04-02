import placeholder from '../pic/placeholder.jpeg'
import arrow_pic from '../pic/arrow.png'
import { MatchProps } from '../props/matchesProp'
interface Props{
    matchData : MatchProps['matchData']
}

const YourScrimMatch :React.FC<Props> = ({matchData}) => {
    var test:boolean = false
    var nowColor:string = (test ? 'border-l-lightRed' : 'border-l-goodGreen')
    console.log(nowColor)
    console.log(matchData)
    return(
        <div className='flex flex-rows mt-[1%]'>
            <div className={"flex flex-rows bg-white h-[90px] w-[94%] ml-[1%] border-l-[30px] "+nowColor}>
                <div className="flex flex-rows justify-center">
                    <img src={matchData.PicA} alt="enemy team pic" className='h-[60px] w-[60px] mt-[15px] ml-[10px]'/>
                    <label className='w-[300px] text-2xl text-center pt-[26px]'> {matchData.TeamA}  vs {matchData.TeamB}</label>
                    <img src={matchData.PicB} alt="enemy team pic" className='h-[60px] w-[60px] mt-[15px]'/>
                    <label className='w-[150px] text-2xl text-center pt-[26px]'> {matchData.Date} </label>
                    <label className='w-[100px] text-2xl text-center pt-[10px]'> {matchData.Time} </label>
                </div>
            </div>
            <div className='bg-zinc-300 w-[40px]'>
                <img src={arrow_pic} alt="gotoinfo" className='h-[30px] w-[30px] mt-[30px] ml-[5px] '/>
            </div>
        </div>
    )
}

export default YourScrimMatch