import React, { useState, useEffect } from 'react'
import './NetflixShows.css'
import axios from 'axios'
import YouTube, { YouTubeProps } from 'react-youtube';
// import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import movieTrailer from "movie-trailer";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const NetflixShows = ({ fetchURL, title }) => {

    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    var tmdb = "https://api.themoviedb.org/3";

    var baseURL = "https://image.tmdb.org/t/p/original";


    useEffect(() => {
        const fetchedFile = async () => {
            var movieData = await axios.get(tmdb + fetchURL)
            if (movieData.data.results) {

                setMovies(movieData.data.results)
            }
            else {
                setMovies([])
            }
            console.log(movieData)
        }
        fetchedFile()
    }, [tmdb + fetchURL])

    const opts: YouTubeProps['opts'] = {
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    const handleClick = (movie) => {


        movieTrailer(movie?.name || "")
            .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get("v"));
            })
            .catch((error) => console.log(error));


    }


    if (movies.length === 0) return
    console.log(baseURL, "hello:::::::")
    return (
        <>
            <div className='title'>{title}</div>
            < div className='main_box'>
                <div className='shortPosters'>
                    {movies.map((movie) => {
                        const { poster_path, id, backdrop_path } = movie
                        return (
                            <div key={id}
                                alt={movie.name}
                                onClick={() => handleClick(movie)}
                            >
                                {poster_path ? <img src={baseURL + poster_path} alt={id}
                                    style={{ width: "200px", height: "100%" }}
                                /> : <Skeleton count={1} highlightColor="#525252" width={"200px"} height={"300px"} />}
                                {/* <img src={baseURL + poster_path} alt={id}
                                    style={{ width: "200px", height: "100%" }}
                                /> */}
                            </div>
                        )
                    })}
                </div>

            </div>
            {/* <YouTube videoId={trailerUrl} opts={opts} /> */}
        </>
    )
}

export default NetflixShows
