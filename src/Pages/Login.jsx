import React from 'react'
import image from '../assets/logoUmuslim.png';


const Login = () => {
    return (
        <>
           <div className="flex min-h-full flex-col justify-center px-6 py-12 items-center lg:px-8  ">
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm md:shadow-2xl md:p-10 rounded-lg">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm mb-10">
                    <img className="mx-auto w-32" src={image} alt="Your Company" />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Masuk ke Akun Anda</h2>
                </div>
                    <form className="space-y-6" action="#" method="POST">
                    <div>
                        <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                        <div className="mt-2">
                        <input id="email" name="email" type="email" autocomplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset px-2 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                        <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                      
                        </div>
                        <div className="mt-2">
                        <input id="password" name="password" type="password" autocomplete="current-password" required className="block w-full rounded-md border-0 py-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset px-2  sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-[#006633] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ">Masuk</button>
                    </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Login