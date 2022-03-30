import placeholder from '../pic/placeholder.jpeg'
import user_icon from '../pic/user_icon.png'
import arrow_icon from '../pic/arrow.png'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const LoginPage:React.FC = ()=> {
    
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [usernameErr,setUsernameErr] = useState('')
    const [passwordErr,setPasswordErr] = useState('')
    let navigate = useNavigate()
    
    console.log(username,
        password)
    const userNameInputHandler = (event :any)=>{
        setUsername(event.target.value)
    }
    const passwordInputHandler = (event :any)=>{
        setPassword(event.target.value)
    }
    const loginSubmitHandler = async ()=>{
        /*await backend */
        if(username === ''){
            setUsernameErr('* Username is required')
            setPassword(password)
            setPasswordErr('')
            return;
        }
        else{
            setUsernameErr('')
        }
        if(password === ''){
            setPasswordErr('* Password is required')
            setUsername(username)
            setUsernameErr('')
            return;
        }
        else{
            setPasswordErr('')
        }
        var errFromBack:boolean = false
        if (errFromBack) {
            setPasswordErr('* Username or Password Incorrect!')
            setUsername(username)
            setPassword('')
            return;
        }
        setPassword('')
        setUsername('')
        setPasswordErr('')
        setUsernameErr('')
        
        let path = '/home'
        navigate(path)
    }
    const gotoRegister = () =>{
        let path = '/register'
        navigate(path)
    }


    return(
        <div className="flex flex-row text-center h-screen ">
            <div className="basis-1/3 bg-loginPage-BG bg-center place-items-center bg-no-repeat bg-cover">
            </div>
            <div className="basis-2/3 bg-white">
                <form className="flex flex-col bg-white border-2 rounded-md border-black mt-auto h-[80%] w-[60%] mt-[7%] ml-[20%] " onSubmit={loginSubmitHandler}>
                    <label className='pt-[15%] font-bold text-5xl'>  Log In  </label>
                    <div className='flex flex-row mt-[5%] mx-[4%]  h-[10%]'>
                        <img src={user_icon} className='h-[100%] ml-[10%]' alt='user_icon'/>
                        <input type='text' className='border-block border-black border rounded-lg ml-[4%] h-[100%] w-[55%] focus:border focus:bg-gray-100 text-3xl indent-2.5' placeholder='username' onChange={userNameInputHandler}></input>
                    </div>
                    <div className='h-[5%] text-red-900'>
                        {usernameErr}
                    </div>
                    <div className='flex flex-row mx-[4%] h-[10%]'>
                        <img src={user_icon} className='h-[100%] ml-[10%]' alt='pass_icon'/>
                        <input type='password' className='border-block border-black border rounded-lg ml-[4%] h-[100%] w-[55%] focus:border focus:bg-gray-100 text-3xl indent-2.5'  placeholder='password'  onChange={passwordInputHandler}></input>
                    </div>
                    <div className='h-[5%] text-red-900'>
                        {passwordErr}
                    </div>
                    <div className='flex flex-row place-content-center h-[10%]'>
                        <button className='border-block bg-white border-black border ml-[2%] w-[50%] rounded-md bg-[#b91c1c] text-white text-2xl active:bg-[#991b1b]' onClick={loginSubmitHandler} >
                            <div className='flex flex-row h-[50%] place-content-end'>
                                <label  className='pr-[30%] py-[0.001%] text-2xl hover:cursor-pointer'>Login</label>
                                <img src={arrow_icon} className='mt-[1%] mr-[4%]' alt='login_icon'/>
                            </div>
                        </button>
                    </div>
                    <div className='flex flex-row place-content-center'>
                        <button className='text-lg mt-[2%] underline underline-offset-1 text-[#991b1b] active:text-[#7f1d1d]' onClick={gotoRegister}> 
                            register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage