const express = require("express")
const router = express.Router()
const { createPerson, getAllPerson, getPersonByWork } = require("../Controller/person.controller")


router.post('/', createPerson)
router.get('/', getAllPerson)
router.get('/:workType', getPersonByWork)


module.exports = router