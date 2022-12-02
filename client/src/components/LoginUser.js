import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import toastr from "toastr"
import Cookies from 'universal-cookie';
import api from "../api/api"


const LoginUser = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()
    const cookies = new Cookies();

    const handleSumit = async (e) => {
 
        e.preventDefault();
        try {
            // await api.deleteCurrentSession()
          await api.createSession(email, password);
          const data = await api.getAccount();
          console.log(data.$id);
          cookies.set('token', data.$id);

        } catch (e) {
            console.log(e);
        }

        history.push('/todos')
        toastr.success('Registration Successful', 'Welcome!')

    }


    return (
        <>
            <div className="flex items-center justify-center h-screen w-full">
                {/* <!-- Login Container --> */}
                <div className="min-w-fit flex-col border bg-white px-6 py-14 shadow-md rounded-[4px] w-1/4 ">
                    <div className="mb-8 flex justify-center">
                        <h1 className='text-4xl text-bold'>Todo</h1>
                    </div>
                    <div className="flex flex-col text-sm rounded-md">
                        <input className="mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-yellow-500 " type="text" placeholder="Username or Email id" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input className="border rounded-[4px] p-3 hover:outline-none focus:outline-none hover:border-yellow-500" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button className="mt-5 w-full border p-2 bg-gradient-to-r from-gray-800 bg-gray-500 text-white rounded-[4px] hover:bg-slate-400 scale-105 duration-300" type="submit" onClick={(e)=>{handleSumit(e)}}>Sign in</button>
                    <div className="mt-5 flex justify-between text-sm text-gray-600">
                        {/* <a href="#">Forgot password?</a> */}
                        <Link to={'/register'}>Sign up</Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default LoginUser