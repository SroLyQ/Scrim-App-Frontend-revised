import user_icon from '../pic/user_icon.png'
import arrow_icon from '../pic/arrow.png'
import register from '../services/RegisterServices'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'



const RegisterPage: React.FC = () =>{
    let navigate = useNavigate()
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPass,setConfirmPass] = useState('')
    const [error,setError] = useState('')

    const userNameInputHandler = (event:any) => {
        setUsername(event.target.value)
        console.log(username)
    }
    const passwordInputHandler = (event:any) => {
        setPassword(event.target.value)
        console.log(password)
    }
    const passwordConInputHandler = (event:any) => {
        setConfirmPass(event.target.value)
        console.log(confirmPass)
    }

    const submitHandler = async () =>{
        if(password != confirmPass){
            setError('password mismatch')
            return;
        }
        console.log('All good')
        setUsername('')
        setPassword('')
        setConfirmPass('')
        let path = '/login'
        navigate(path)
    }
    return(
    <div className="flex flex-row text-center h-screen ">
        <div className="
            basis-1/3 
            bg-loginPage-BG 
            bg-center 
            place-items-center 
            bg-no-repeat bg-cover">
        </div>
        <div className="basis-2/3 bg-white">
            <div className="flex flex-col bg-white border-2 rounded-md border-black mt-auto h-[80%] w-[60%] mt-[7%] ml-[20%] ">
                <label className='pt-[15%] font-bold text-5xl'>  Register  </label>
                <div className='flex flex-row mt-[5%] mx-[4%]  h-[10%]'>
                    <img src={user_icon} className='h-[100%] ml-[10%]' alt='user_icon'/>
                    <input type='text' className='border-block border-black border rounded-lg ml-[4%] h-[100%] w-[55%] focus:border focus:bg-gray-100 text-3xl indent-2.5' 
                    placeholder=' username' onChange={userNameInputHandler}></input>
                </div>
                <div className='flex flex-row mt-[5%] mx-[4%] h-[10%]'>
                    <img src={user_icon} className='h-[100%] ml-[10%]' alt='pass_icon'/>
                    <input type='text' className='border-block border-black border rounded-lg ml-[4%] h-[100%] w-[55%] focus:border focus:bg-gray-100 text-3xl indent-2.5' 
                    placeholder=' password' onChange={passwordInputHandler}></input>
                </div>
                <div className='flex flex-row mt-[5%] mx-[4%] h-[10%]'>
                    <img src={user_icon} className='h-[100%] ml-[10%]' alt='pass_icon'/>
                    <input type='text' className='border-block border-black border rounded-lg ml-[4%] h-[100%] w-[55%] focus:border focus:bg-gray-100 text-3xl indent-2.5' 
                    placeholder='confirm password' onChange={passwordConInputHandler}></input>
                </div>
                <div className='flex flex-row place-content-center h-[10%] mt-[5%]'>
                    <button className='border-block bg-white border-black border ml-[2%] w-[50%] rounded-md bg-[#b91c1c] text-white text-2xl active:bg-[#991b1b]' onClick={submitHandler} >
                        <div className='flex flex-row h-[50%] place-content-end'>
                            <label  className='pr-[30%] py-[0.001%] text-2xl hover:cursor-pointer'>Register</label>
                            <img src={arrow_icon} className='mt-[1%] mr-[4%]' alt='login_icon'/>
                        </div>
                    </button>
                </div>
                <div className='mt-[2%]'>
                    <label className='text-red-800 text-lg' > {error} </label>
                </div>
            </div>
        </div>
    </div>
)

}

export default RegisterPage
