import React from 'react'
import './NetflixBanner.css'
import NetflixShows from '../../NetflixShows/NetflixShows'
import requests from '../../../ApiRequestData'
const NetflixBanner = () => {
    return (
        <div className='netflixbanner'>
            <NetflixShows
                title={"Originals"}
                fetchURL={requests.fetchNetflixOriginals}
            />
            <NetflixShows
                title={"Play"}
                fetchURL={requests.fetchPlay}
            />
            <NetflixShows
                title={"Trending"}
                fetchURL={requests.fetchTrending}
            />
            <NetflixShows
                title={"Top Rated"}
                fetchURL={requests.fetchTopRated}
            />
            <NetflixShows
                title={"Popular"}
                fetchURL={requests.fetchPopular}
            />
            {/* <NetflixShows
                title={"Latest"}
                fetchURL={requests.fetchLatest}
            /> */}
        </div>
    )
}

export default NetflixBanner
