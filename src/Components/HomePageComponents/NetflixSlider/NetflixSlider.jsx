import React, { useState, useEffect } from 'react'
import './NetflixSlider.css'
import requests from '../../../ApiRequestData'
import axios from 'axios'
const NetflixSlider = () => {

    const [info, setInfo] = useState([])

    var tmdb = "https://api.themoviedb.org/3";


    var baseURL = "https://image.tmdb.org/t/p/original"

    useEffect(() => {
        const fetchedData = async () => {
            var myData = await axios.get(tmdb + requests.fetchNetflixOriginals);
            setInfo(myData.data.results[Math.floor(Math.random() * 20)])
        }

        fetchedData()
    }, [])

    return (
        <div>

        </div>
    )
}

export default NetflixSlider
