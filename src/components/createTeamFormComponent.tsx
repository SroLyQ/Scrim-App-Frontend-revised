import { useState } from 'react'
import placeholder from '../pic/user_icon.png'
const CreateTeamForm : React.FC = () => {
    const [selectedFile,setSelectedFile] = useState()
    const uploadFileHandler = (event:any) =>{
        setSelectedFile(event.target.files[0])
    }
    const submitUploadHandler = (event:any) => {
        console.log('sent ' + selectedFile +' to backend')
    }
    return (
        <div className="flex flex-row w-full h-full">
            <div className="flex flex-col w-[35%] items-center">
                <img src={placeholder} alt="" className='h-[68%] rounded-full mt-[5%]'/>
                <div className='flex flex-row w-[100%] h-[40%] items-center flex-wrap justify-center'>
                    <input type="file" className='min-w-[100px]' onChange={uploadFileHandler}/>
                    <button className='bg-lightRed w-[20%] h-[50%] active:bg-hardRed font-bold' onClick={submitUploadHandler}>Upload!</button>
                </div>
            </div>
            <div className="flex flex-col w-[65%] border-l-[2px] border-l-gray-700">
                <div className='flex flex-row w-[100%] h-[40%] ml-[1.5%]'>
                    <div className='flex flex-col h-full w-[50%] justify-center'>
                        <label className='text-3xl font-bold ml-[2.5%]'> TeamName : </label>
                        <input type="text" className='text-3xl mt-[3%] w-[95%] ml-[2.5%] indent-2.5'/>
                    </div>
                </div>
                <div className='flex flex-row w-[100%] h-[60%]'>
                    <div className='flex flex-col h-full w-[100%] '>
                        <label className='text-3xl font-bold ml-[2.5%]'> Bio : </label>
                        <textarea name="team_bio" className='w-[95%] ml-[2.5%] h-[60%] mt-[15px] text-3xl overflow-y-scroll' maxLength={300}></textarea>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateTeamForm