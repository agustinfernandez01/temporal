const express = require("express")
const { allPropsad , setProp, deleteProp } = require("../controllers/admin")

const router = express.Router()

router.get("/admin",allPropsad)
router.post("/insert",setProp)
router.delete("/delete/:id",deleteProp)

module.exports = router

