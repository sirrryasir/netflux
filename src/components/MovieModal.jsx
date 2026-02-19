import { X, ChevronRight } from 'lucide-react';

function MovieModal({ movie, onClose, baseUrl }) {
    if (!movie) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-all duration-300">
            <div className="relative bg-[#181818] w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl animate-modal-in border border-white/10">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 bg-black/40 text-white rounded-full p-2 hover:bg-black/80 transition"
                >
                    <X className="w-6 h-6" />
                </button>


                {/* Hero section from image */}
                <div className="relative h-[300px] md:h-[400px]">
                    <img
                        src={`${baseUrl}${movie.backdrop_path || movie.poster_path}`}
                        alt={movie.title || movie.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
                </div>

                {/* Content section matching the image */}
                <div className="p-8 md:p-12 -mt-20 relative z-10">
                    <h1 className="text-white text-5xl md:text-6xl font-black mb-6 uppercase tracking-tighter">
                        {movie.title || movie.name}
                    </h1>

                    <div className="flex flex-wrap items-center gap-3 text-sm font-bold text-gray-300 mb-6">
                        <span className="text-green-500">{movie.release_date?.split('-')[0] || movie.first_air_date?.split('-')[0] || '2024'}</span>
                        <span className="border border-gray-600 px-2 py-0.5 text-[10px] rounded">18+</span>
                        <span>Show</span>
                        <span>Thrillers</span>
                        <span>Mysteries</span>
                        <span>Dramas</span>
                    </div>

                    <p className="text-gray-300 text-lg leading-snug mb-8 max-w-xl">
                        {movie.overview || "Two estranged spouses — one a detective, the other a news reporter — vie to solve a murder in which each believes the other is a prime suspect."}
                    </p>

                    <button
                        className="bg-[#e50914] hover:bg-[#ff0f1e] text-white px-8 py-3 rounded-lg font-black text-2xl flex items-center gap-2 transition-all transform hover:scale-105 active:scale-95 shadow-xl"
                    >
                        Get Started <ChevronRight className="w-8 h-8" />
                    </button>

                </div>
            </div>
        </div>
    )
}


export default MovieModal
