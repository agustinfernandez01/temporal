const PORT = process.env.PORT || 3000

const DB_HOST = process.env.DB_HOST || "localhost"
const DB_USER = process.env.DB_USER || "root"
const DB_PASS = process.env.DB_PASS || "pelado02"
const DB_NAME = process.env.DB_NAME || "db_temporal"
const DB_PORT = process.env.DB_PASS || 8000

module.exports = {DB_HOST,DB_USER,DB_PASS,DB_PORT,DB_NAME}