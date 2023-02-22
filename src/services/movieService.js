import {apiService} from "./apiService";
import {urls} from "../configs";

const movieService = {
    getGenres: () => apiService.get(urls.genres),
    getMovies: (page) => apiService.get(urls.movies.allMovies(page)),
    moviesByGenre: (page, ids) => apiService.get(urls.movies.moviesByGenre(page, ids)),
    search: (keyWord, page) => apiService.get(urls.search(keyWord, page)),
    getMovieImage: (id) => apiService.get(urls.movies.getImage(id))
}

export {movieService}