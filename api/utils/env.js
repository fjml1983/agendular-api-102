require('dotenv').config()

const envVars ={
    env: process.env.NODE_ENV || 'development',
    dbHost: process.env.PGHOST,
    dbPort: process.env.PGPORT,
    dbName: process.env.PGDATABASE,
    dbUser: process.env.PGUSER,
    dbPass: process.env.PGPASSWORD
}

module.exports = envVars