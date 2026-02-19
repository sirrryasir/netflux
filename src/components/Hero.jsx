import React from 'react'
import { useNavigate } from 'react-router-dom'
import bgimg from "../assets/bannerbg.jpg";

function Hero() {
    const navigate = useNavigate();

    return (
        <div className="relative h-screen flex flex-col items-center justify-center text-white text-center px-4 overflow-hidden">
            {/* Background Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-40"
                style={{ backgroundImage: `url(${bgimg})` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />

            <div className="relative z-10 max-w-4xl">
                <h1 className="text-5xl md:text-6xl font-black mb-6">
                    Unlimited films, series and more
                </h1>
                <p className="text-xl md:text-2xl font-bold mb-8">
                    Starts at USD 2.99. Cancel at any time.
                </p>
                <p className="text-lg mb-6">
                    Ready to watch? Enter your email to create or restart your membership.
                </p>

                <div className="flex flex-col md:flex-row gap-4 items-center justify-center w-full">
                    <input
                        className="w-full max-w-md p-4 bg-black/40 border border-gray-500 rounded text-white outline-none focus:border-white transition"
                        type="text"
                        placeholder="Email Address"
                    />
                    <button
                        onClick={() => navigate('/login')}
                        className="bg-red-600 hover:bg-red-700 p-4 px-10 rounded font-bold text-2xl transition w-full md:w-auto"
                    >
                        Get Started &gt;
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero
