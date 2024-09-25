const express = require('express')
const router = express.Router()
const { getCrud, setCrud, updateCrud, deleteCrud } = require('../controllers/crudController')

// CREATE & READ
router.route('/').get(getCrud).post(setCrud)
// UPDATE & DELETE
router.route('/:id').put(updateCrud).delete(deleteCrud)

module.exports = router

// kode dibawah adalah kode sebelum di cleancode
// router.get('/', getCrud
// router.post('/', setCrud)
// router.put('/:id', updateCrud )
// router.delete('/:id', deleteCrud)