import React, { useState, useEffect } from 'react'
import './NetflixSlider.css'
import requests from '../../../ApiRequestData'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const NetflixSlider = () => {

    const [info, setInfo] = useState([])

    var tmdb = "https://api.themoviedb.org/3";


    var baseURL = "https://image.tmdb.org/t/p/original"

    useEffect(() => {
        const fetchedData = async () => {
            var myData = await axios.get(tmdb + requests.fetchNetflixOriginals);
            setInfo(myData.data.results[Math.floor(Math.random() * 20)])
            // console.log(myData.data.results[Math.floor(Math.random() * 20)])
        }
        fetchedData()
    }, [])

    return (
        <>
            <header className='banner'
                style={{
                    backgroundImage: `url(${baseURL}${info?.backdrop_path})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                    height: '100vh'
                }
                }
            >

                <div className="banner_content" style={{ color: "white" }}>


                    <h1>
                        {info?.title || info?.name || <Skeleton count={1} highlightColor="#525252" width={"250px"}  height={"40px"}/>}
                    </h1>
                    <div className="banner__buttons">
                        <button className="inside_button"><i class="fa-solid fa-play"></i> Play</button>
                        <button className="inside_button"><i class="fa-solid fa-list"></i> My List</button>
                    </div>

                    <div className="movie_overview">{info?.overview || <Skeleton count={4} width={"500px"} height={"20px"} />}</div>
                    <div className='movie_Rating' style={{"fontWeight":"700"}}>Rating : {info?.vote_average}/10</div>
                </div>
            </header >
        </>
    )
}

export default NetflixSlider
