const express = require("express")
const router = express.Router()
const { createPerson, getAllPerson, getPersonByWork, updatePerson, deletePerson } = require("../Controller/person.controller")


router.post('/', createPerson)
router.get('/', getAllPerson)
router.get('/:workType', getPersonByWork)
router.put('/update/:id', updatePerson)
router.delete('/delete/:id',deletePerson)



module.exports = router