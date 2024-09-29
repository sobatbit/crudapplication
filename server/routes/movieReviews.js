const express = require('express')
const router = express.Router()
const { getAllMovieReview, createNewMovieReview, updateMovieReview, deleteMovieReview } = require('../controllers/movieReviews')

// kode dibawah adalah kode setelah di lakukan cleancode
// CREATE & READ
router.route('/').get(getAllMovieReview).post(createNewMovieReview)
// UPDATE & DELETE
router.route('/:id').patch(updateMovieReview).delete(deleteMovieReview)

module.exports = router

// kode dibawah adalah kode sebelum di lakukan cleancode
// router.get('/', getAllMovieReview)
// router.post('/', createNewMovieReview)
// router.patch('/:id', updateMovieReview)
// router.delete('/:id', deleteMovieReview)