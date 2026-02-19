import React from 'react'

function MovieCard({ movie, baseUrl }) {
    return (
        <div className="group relative cursor-pointer transform hover:scale-105 transition duration-300">
            <img
                src={`${baseUrl}${movie.poster_path}`}
                alt={movie.name}
                className="w-full h-auto rounded-md shadow-lg"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-end p-4 rounded-md">
                <p className="text-white text-sm font-semibold truncate">
                    {movie.title || movie.name}
                </p>
            </div>
        </div>
    )
}

export default MovieCard
