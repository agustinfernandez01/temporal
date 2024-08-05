const express = require("express")
const {allPropsad} = require("../controllers/admin")

const router = express.Router()

router.get("/admin",allPropsad)

module.exports = router