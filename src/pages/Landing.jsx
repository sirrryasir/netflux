import React, { useState } from 'react'

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Trends from "../components/Trends";
import MovieModal from "../components/MovieModal";
import Reasons from "../components/Reasons";
import Questions from "../components/Questions";
import Subscription from "../components/Subscription";
import Footer from "../components/Footer";

function Landing() {
    const [selectedMovie, setSelectedMovie] = useState(null);

    const base_url = "https://image.tmdb.org/t/p/original/"

    return (
        <div className="bg-black text-white min-h-screen">
            <Navbar />
            <Hero />
            <div className="px-6 md:px-30">
                <Trends onMovieClick={(movie) => setSelectedMovie(movie)} />
                <div className="flex flex-col items-center">
                    <Reasons />
                    <Questions />
                </div>
                <Subscription />
                <Footer />
            </div>

            <MovieModal
                movie={selectedMovie}
                onClose={() => setSelectedMovie(null)}
                baseUrl={base_url}
            />
        </div>
    )
}


export default Landing
