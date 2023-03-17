const API_KEY = "01119e8533d38c65e3f92ff109a11b3b";


const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-us`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchUpcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    fetchPopular: `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
    fetchLatest: `/movie/latest?api_key=${API_KEY}&language=en-US`,
    fetchPlay: `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
    fetchSameMovie: `/movie/latest?api_key=${API_KEY}&language=en-US`,
    fetchVideoData: `/movie/{movie_id}/videos?api_key=${API_KEY}&language=en-US`
}

export default requests;

