import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

function Navbar() {
    // const [show, handleShow] = useState(false)
    const navigate = useNavigate();
    const location = useLocation();

    const isLanding = location.pathname === '/';
    const isLogin = location.pathname === '/login';

    return (
        <nav className={`w-full z-30 flex justify-around items-center px-6 md:px-10 py-6 transition-all duration-500 bg-black`}>
            <h1
                onClick={() => navigate('/')}
                className="text-red-600 font-bold font-primary text-5xl cursor-pointer"
            >
                NETFLUX
            </h1>

            {!isLogin && (
                <div className="flex items-center gap-4 md:gap-6">
                    {isLanding ? (
                        <>
                            <select className="hidden md:block bg-black/40 text-white border border-gray-500 py-1 px-2 rounded">
                                <option>English</option>
                                <option>Somali</option>
                            </select>
                            <button
                                onClick={() => navigate('/login')}
                                className="bg-red-600 text-white px-4 py-1 rounded font-bold hover:bg-red-700 transition"
                            >
                                Sign In
                            </button>
                        </>
                    ) : (
                        <>
                            <div className="text-white text-sm font-semibold cursor-pointer hidden md:block">Home</div>
                            <div className="text-white text-sm font-semibold cursor-pointer hidden md:block">TV Shows</div>
                            <div className="text-white text-sm font-semibold cursor-pointer hidden md:block">Movies</div>
                            <img
                                onClick={() => navigate('/')}
                                className="w-8 h-8 rounded-sm cursor-pointer"
                                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                                alt="Avatar"
                            />
                        </>
                    )}
                </div>
            )}
        </nav>
    )
}

export default Navbar