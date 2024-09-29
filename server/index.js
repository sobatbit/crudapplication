require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 5000
const middlewareRequest = require('./middleware/logs')
const { errorHandler } = require('./middleware/errorHandler')
const movieReviewRoutes = require('./routes/movieReviews')

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(middlewareRequest)
app.use(errorHandler)
app.use(express.urlencoded({extended: false}))
app.use('assets', express.static('public/images'))

app.use('/v1/crud', movieReviewRoutes)

app.listen(PORT, () => console.log(`Connection success on Port : ${PORT} `));








// app.post('/api/insert', (req, res) => {

//     const movieName = req.body.movieName
//     const movieReview = req.body.movieReview

//     const sqlInsert = "INSERT INTO movie_reviews (movieName, movieReview) VALUES (?, ?)"
//     db.query(sqlInsert, [movieName, movieReview], (err, result) => {
//         console.log(result)
        
//     })
// })