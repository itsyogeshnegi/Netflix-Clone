import React from 'react'
import Mini_Slider from './Mini_Slider'

const Main_Mini_component = () => {
    return (
        <div>
            <Mini_Slider
                heading={"Enjoy on your TV."}
                text={"Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."}
                photos={<img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png' />}
            />
            <Mini_Slider
                reverse
                heading={"Download your shows to watch offline."}
                text={"Save your favourites easily and always have something to watch."}
                photos={<img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg' />}
            />
            <Mini_Slider
                heading={"Watch everywhere."}
                text={"Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."}
                photos={<img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png' />}
            />
            <Mini_Slider
                reverse
                heading={"Create profiles for children."}
                text={"Send children on adventures with their favourite characters in a space made just for them—free with your membership."}
                photos={<img src='https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABYjXrxZKtrzxQRVQNn2aIByoomnlbXmJ-uBy7du8a5Si3xqIsgerTlwJZG1vMpqer2kvcILy0UJQnjfRUQ5cEr7gQlYqXfxUg7bz.png?r=420' />}
            />

        </div>
    )
}

export default Main_Mini_component
