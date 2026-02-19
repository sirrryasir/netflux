import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import MovieCard from '../components/MovieCard'
import MovieModal from '../components/MovieModal'
import Footer from '../components/Footer'
import requests from '../api/requests'

function Browse() {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [selectedMovie, setSelectedMovie] = useState(null)

    const base_url = "https://image.tmdb.org/t/p/original/"

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                // Isticmaalka Fetch API halkii laga isticmaali lahaa Axios
                const response = await fetch(requests.fetchTrending)

                if (!response.ok) {
                    throw new Error("Xogta lama soo helin!")
                }

                const data = await response.json()
                setMovies(data.results)
                setLoading(false)
            } catch (err) {
                console.error("API Error:", err)
                setError(true)
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    if (error) {
        return (
            <div className="bg-[#111] h-screen flex items-center justify-center text-white">
                <div className="text-center">
                    <h1 className="text-3xl font-bold mb-4">Wax baa qaldamay sxb!</h1>
                    <button
                        onClick={() => window.location.reload()}
                        className="bg-red-600 px-6 py-2 rounded font-bold"
                    >
                        Ku celi mar kale
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="browse bg-[#111] min-h-screen text-white relative">
            <Navbar />

            <div className="p-10 pt-24">
                <h1 className="text-3xl font-bold mb-8">Trending Now</h1>

                {loading ? (
                    <div className="flex justify-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-red-600"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                        {movies.map(movie => (
                            <div key={movie.id} onClick={() => setSelectedMovie(movie)}>
                                <MovieCard movie={movie} baseUrl={base_url} />
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Modal Detail View */}
            <MovieModal
                movie={selectedMovie}
                onClose={() => setSelectedMovie(null)}
                baseUrl={base_url}
            />

            <div className="px-10 border-t border-gray-800 mt-20">
                <Footer />
            </div>
        </div>
    )
}

export default Browse
