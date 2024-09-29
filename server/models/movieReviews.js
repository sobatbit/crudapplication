const dbPool = require('../config/database')

const getAllMovieReview = () => {
    const SQLQuery = 'SELECT * FROM movie_reviews'

    return dbPool.execute(SQLQuery)
}

const createNewMovieReview = (body) => {
    const SQLQuery = ` INSERT INTO movie_reviews (movieName, movieReview) 
                       VALUES ('${body.movieName}','${body.movieReview}')`

    return dbPool.execute(SQLQuery)
}

const updateMovieReview = (body, id) => {
    const SQLQuery = `  UPDATE movie_reviews 
                        SET movieName='${body.movieName}', movieReview='${body.movieReview}' 
                        WHERE id=${id}`

    return dbPool.execute(SQLQuery)
}

const deleteMovieReview = (id) => {
    const SQLQuery = `DELETE FROM movie_reviews WHERE id=${id}`

    return dbPool.execute(SQLQuery)
}

module.exports = {
    getAllMovieReview,
    createNewMovieReview,
    updateMovieReview,
    deleteMovieReview,
}

