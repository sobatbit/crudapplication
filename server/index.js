require('dotenv').config()
const express = require('express')
const mysql = require('mysql2')
const bodyParser = require('body-parser')
const cors = require('cors')
// const colors = require('colors')
const app = express()
const PORT = process.env.PORT || 5000
// const middlewareRequest = require('./middleware/logs')
// const { errorHandler } = require('./middleware/errorHandler')

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})
app.use(cors())
app.use(express.json()) // agar middleware mengizinkan request body berupa json
app.use(bodyParser.urlencoded({extended: true}))
// app.use(middlewareRequest)
// app.use(errorHandler)
// app.use(express.urlencoded({extended: false}))

app.post('/api/insert', (req, res) => {

    const movieName = req.body.movieName
    const movieReview = req.body.movieReview

    const sqlInsert = "INSERT INTO movie_reviews (movieName, movieReview) VALUES (?, ?)"
    db.query(sqlInsert, [movieName, movieReview], (err, result) => {
        console.log(result)
        
    })
})



// app.use('/v1/crud', require('./routes/crudRoute'))

app.listen(PORT, () => console.log(`Connection success on Port : ${PORT} `));