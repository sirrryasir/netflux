import React, { useState, useEffect } from 'react'
import requests from '../api/requests'

function Trends({ onMovieClick }) {
  const [movies, setMovies] = useState([])
  const base_url = "https://image.tmdb.org/t/p/original/"

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(requests.fetchTrending)
        const data = await response.json()
        setMovies(data.results.slice(0, 10))
      } catch (error) {
        console.error("Trends fetch error:", error)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="py-10">
      <div className="font-bold text-2xl mb-8">Trending Now</div>
      <div className="flex gap-12 overflow-x-scroll no-scrollbar pb-10 px-10">
        {movies.map((movie, index) => (
          <div
            key={movie.id}
            onClick={() => onMovieClick(movie)}
            className="min-w-[200px] h-[300px] relative transition-transform duration-300 hover:scale-110 cursor-pointer group"
          >
            <img
              className="rounded-lg w-full h-full object-cover shadow-2xl"
              src={`${base_url}${movie.poster_path}`}
              alt={movie.title || movie.name}
            />
            {/* Outline Number */}
            <div className="absolute -bottom-6 -left-10 text-[150px] font-black leading-none select-none z-10"
              style={{
                color: 'transparent',
                WebkitTextStroke: '2px #777',
                textShadow: '0 0 20px rgba(0,0,0,0.5)'
              }}>
              {index + 1}
            </div>

            {/* Netflix 'N' Logo Overlay */}
            <div className="absolute top-2 left-2 w-6">
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="N" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Trends;

