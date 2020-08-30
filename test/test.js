const chai = require('chai');
const assert = chai.assert;
const should = chai.should();
const expect = chai.expect;
const services = require('../services/movies');

describe('Testing assert function: ', () => {
    describe('Check getMovies Function', () => {
        it('Check the returned value using : assert.equal(value, values): ', async () => {
            const moviesServices = new services();
            let movies = await moviesServices.getMovies();
            assert.equal(typeof(movies), typeof({}));
        });
    });
});