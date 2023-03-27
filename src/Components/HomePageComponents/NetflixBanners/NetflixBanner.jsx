import React from 'react'
import './NetflixBanner.css'
import NetflixShows from '../../NetflixShows/NetflixShows'
import requests from '../../../ApiRequestData'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
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
            <NetflixShows
                title={"Best Movies"}
                fetchURL={requests.fetchBestMovies}
            />
            <NetflixShows
                title={"Kids Movies"}
                fetchURL={requests.fetchKids}
            />
            <NetflixShows
                title={"Drama"}
                fetchURL={requests.fetchDrama}
            />
            <NetflixShows
                title={"sci-fi"}
                fetchURL={requests.fetchscifi}
            />
            <NetflixShows
                title={"Theater"}
                fetchURL={requests.fetchTheater}
            />
            <NetflixShows
                title={"Highest Rated"}
                fetchURL={requests.fetchHighest}
            />
            <NetflixShows
                title={"USA Movies"}
                fetchURL={requests.fetchUSA}
            />
            <NetflixShows
                title={"Comedy"}
                fetchURL={requests.fetchComedy}
            />
            <NetflixShows
                title={"Anime"}
                fetchURL={requests.fetchAnime}
            />

        </div>
    )
}

export default NetflixBanner
