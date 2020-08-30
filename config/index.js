require('dotenv').config();

const config = {
    dev: process.env.NODE_ENV !== 'production',
    port: process.env.PORT || 3000,
    db_url: process.env.DB_URL,
    index: process.env.INDEX
}

module.exports = { config }