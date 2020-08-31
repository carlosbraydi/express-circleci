const { config } = require('../config/index');
const fetch = require('node-fetch');

const url = config.db_url;
const index = config.index;

const URI = url + index;

class ElasticSearchLib {
    constructor() {
        console.log('cliente conectado');
    }

    getAll() {
        return fetch(URI+'/_search')
        .then(res => res.json())
        .then(json => {
            return json;
        });
    }

    get(type, id) {
        return fetch(URI+'/'+type+'/'+id)
        .then(res => res.json())
        .then(json => {
            return json;
        });
    }

    create(type, data) {
        return fetch(URI+'/'+type+'/'+data['id'], {
            method: 'post',
            body:    JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' },
        })
        .then(res => res.json())
        .then(json => {
          return json;
        });
    }

    update(type, id, data) {
        console.log('data-> ', data);
        return fetch(URI+'/'+type+'/'+id, {
            method: 'put',
            body:    JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' },
        })
        .then(res => res.json())
        .then(json => {
          return json;
        });
    }

    delete(type, id) {
        console.log('type_> ', type);
        console.log('id_> ', id);
        return fetch(URI+'/'+type+'/'+id, {
            method: 'delete',
        })
        .then(res => res.json())
        .then(json => {
          return json;
        });
    }
}

module.exports = ElasticSearchLib;