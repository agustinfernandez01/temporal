const express = require("express")
const { allPropsad , setProp, deleteProp , upProp } = require("../controllers/admin")

const router = express.Router()

router.get("/admin",allPropsad)
router.post("/insert",setProp)
router.put("/update/:id",upProp)
router.delete("/delete/:id",deleteProp)

module.exports = router

