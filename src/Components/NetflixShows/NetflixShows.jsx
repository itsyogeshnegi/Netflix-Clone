import React, { useState, useEffect } from 'react'
import './NetflixShows.css'
import axios from 'axios'
import requests from '../../ApiRequestData'
const NetflixShows = ({ fetchURL, title }) => {

    const [movies, setMovies] = useState([]);

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
    }, [])

    if (movies.length === 0) return
    console.log(baseURL, "hello:::::::")
    return (
        <>
            <div className='title'>{title}</div>
            < div className='main_box'>
                <div className='shortPosters'>
                    {movies.map((values) => {
                        const { poster_path, id } = values
                        return (
                            <div key={id}>
                                <img src={baseURL + poster_path} alt={id}
                                    style={{ width: "200px", height: "100%" }}
                                />
                            </div>
                        )
                    })}
                </div>

            </div>
        </>
    )
}

export default NetflixShows
