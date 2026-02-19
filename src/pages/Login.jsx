import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Login() {
    const navigate = useNavigate();

    return (
        <div className="login min-h-screen flex flex-col bg-black text-white bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/729348c3-ba29-4fc3-9891-81cb33f7560d/web/SO-en-20250210-TRIFECTA-perspective_2c0d8365-d603-490b-9993-847321e0509a_large.jpg')] bg-cover bg-center">
            <Navbar />
            <div className="absolute inset-0 bg-black/60" />

            <div className="flex-1 flex flex-col items-center justify-center">
                <div className="relative z-10 bg-black/80 p-16 rounded-lg w-full max-w-md">
                    <h1 className="text-3xl font-bold mb-8 text-white">Sign In</h1>
                    <form onSubmit={(e) => { e.preventDefault(); navigate('/browse'); }} className="flex flex-col gap-4">
                        <input
                            type="email"
                            placeholder="Email or mobile number"
                            className="bg-[#333] p-4 rounded outline-none text-white focus:bg-[#444] transition"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="bg-[#333] p-4 rounded outline-none text-white focus:bg-[#444] transition"
                        />
                        <button
                            type="submit"
                            className="bg-red-600 py-3 rounded font-bold mt-4 hover:bg-red-700 transition text-lg"
                        >
                            Sign In
                        </button>
                    </form>
                    <p className="mt-8 text-gray-400">
                        New to Netflux? <span className="text-white hover:underline cursor-pointer" onClick={() => navigate('/')}>Sign up now.</span>
                    </p>
                </div>
            </div>

            <div className="relative z-10 bg-black/80 w-full px-6 md:px-30">
                <Footer />
            </div>
        </div>
    )
}

export default Login
