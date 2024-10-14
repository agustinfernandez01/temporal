
const DB_HOST = process.env.DB_HOST || "localhost"
const DB_USER = process.env.DB_USER || "temporaldb"
const DB_PASS = process.env.DB_PASS || "pelado02_"
const DB_NAME = process.env.DB_NAME || "propiedades"


const EMAIL_USER = process.env.EMAIL_USER || "temporalhome4@gmail.com"
const EMAIL_PASS = process.env.EMAIL_PASS || "a1s2d3f4/f4"  //aqui va la contraseña del correo

module.exports = {DB_HOST,DB_USER,DB_PASS,DB_NAME,EMAIL_PASS,EMAIL_USER}

// nodemailer
