const ElasticSearchLib = require('../lib/elasticsearch');

class MoviesService {

    constructor() {
        this.type = 'movies';
        this.ES_DB = new ElasticSearchLib();
    }

    async getMovies() {
        const movies = await this.ES_DB.getAll();
        return movies || [];
    }

    async getMovie({movieId}) {
        const movies = await this.ES_DB.get(this.type, movieId);
        return movies || [];
    }

    async createMovie(movie) {
        const createMovieId = await this.ES_DB.create(this.type, movie);
        return createMovieId;
    }

    async updateMovie(movieId, movie) {
        console.log('data service-> ', movie);
        const updateMovieId = await this.ES_DB.update(this.type, movieId, movie);
        return updateMovieId;
    }

    async deleteMovie({movieId}) {
        console.log('id en service-> ', movieId);
        const deleteMovieId = await this.ES_DB.delete(this.type, movieId);
        return deleteMovieId;
    }
}

module.exports = MoviesService;