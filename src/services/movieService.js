import {apiService} from "./apiService";
import {urls} from "../configs";

const movieService = {
    getGenres: () => apiService.get(urls.genres),
    getMovies: (page) => apiService.get(urls.allMovies(page)),
    moviesByGenre: (ids, page) => apiService.get(urls.moviesByGenre(page, ids)),
    search: (keyWord, page) => apiService.get(urls.search(keyWord, page)),
    movieById: (id) => apiService.get(urls.movieById(id)),
    getTopRated: () => apiService.get(urls.topRated)
}

export {movieService}