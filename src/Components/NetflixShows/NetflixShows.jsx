import React, { useState, useEffect } from 'react'
import './NetflixShows.css'
import axios from 'axios'
import 'react-loading-skeleton/dist/skeleton.css'
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
                            >
                                {poster_path ? <img src={baseURL + poster_path} alt={id}
                                    style={{ width: "200px", height: "100%" }}
                                /> : <Skeleton count={1} highlightColor="#525252" width={"200px"} height={"300px"} />}
                            </div>
                        )
                    })}
                </div>

            </div>
        </>
    )
}

export default NetflixShows
