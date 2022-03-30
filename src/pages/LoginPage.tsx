import placeholder from '../pic/placeholder.jpeg'
import user_icon from '../pic/user_icon.png'
import arrow_icon from '../pic/arrow.png'
import { useNavigate } from 'react-router-dom'

const LoginPage:React.FC = ()=> {
    let navigate = useNavigate()
    const gotoRegister = () =>{
        let path = '/register'
        navigate(path)
    }
    return(
        <div className="flex flex-row text-center h-screen ">
            <div className="basis-1/3 bg-loginPage-BG bg-center place-items-center bg-no-repeat bg-cover">
                Login Pic
            </div>
            <div className="basis-2/3 bg-white">
                <div className="flex flex-col bg-white border-2 rounded-md border-black mt-auto h-[80%] w-[60%] mt-[7%] ml-[20%] ">
                    <label className='pt-[15%] font-bold text-5xl'>  Log In  </label>
                    <div className='flex flex-row mt-[5%] mx-[4%]  h-[10%]'>
                        <img src={user_icon} className='h-[100%] ml-[10%]' alt='user_icon'/>
                        <input type='text' className='border-block border-black border rounded-lg ml-[4%] h-[100%] w-[55%] focus:border focus:bg-gray-100 text-3xl indent-2.5' placeholder='username'></input>
                    </div>
                    <div className='flex flex-row mt-[5%] mx-[4%] h-[10%]'>
                        <img src={user_icon} className='h-[100%] ml-[10%]' alt='pass_icon'/>
                        <input type='text' className='border-block border-black border rounded-lg ml-[4%] h-[100%] w-[55%] focus:border focus:bg-gray-100 text-3xl indent-2.5' placeholder='password'></input>
                    </div>
                    <div className='flex flex-row place-content-center h-[10%] mt-[5%]'>
                        <button className='border-block bg-white border-black border ml-[2%] w-[50%] rounded-md bg-[#b91c1c] text-white text-2xl active:bg-[#991b1b]' >
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
                </div>
            </div>
        </div>
    )
}

export default LoginPage