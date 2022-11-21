module.exports = {

    database: {
        host:process.env.host || 'localhost',
        user:process.env.user || 'root',
        password:process.env.password || '',
        database:process.env.database || 'db_links'
    }

};