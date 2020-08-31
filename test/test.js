const chai = require('chai');
const assert = chai.assert;
const should = chai.should();
const expect = chai.expect;
const services = require('../services/movies');
const mocks = require('../utils/mocks/movies');

describe('Testing assert function: ', () => {
    describe('Check getMovies Function', () => {
        it('Check the returned value using : assert.equal(value, values): ', async () => {
            const moviesServices = new services();
            let movies = await moviesServices.getMovies();
            assert.equal(typeof(movies), typeof({}));
        });
    });

    describe('Check postMovies Function', () => {
        it('Check the returned value using : assert.equal(value, values): ', async () => {
            const moviesServices = new services();
            const data = mocks.moviesMock[1];
            let movies = await moviesServices.createMovie(data);
            movies._id.should.be.equal(data.id);
        });
    });

    describe('Check getMovie Function', () => {
        it('Check the returned value using : assert.equal(value, values): ', async () => {
            const moviesServices = new services();
            const data = mocks.moviesMock[1];
            let movies = await moviesServices.getMovie(data.id);
            expect(movies._source.movie.id).to.equal(data.id);
        });
    });
});