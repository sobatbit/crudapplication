const movieReviewsModel = require('../models/movieReviews')

const getAllMovieReview = async (req, res) => {
    try {
        const [data] = await movieReviewsModel.getAllMovieReview()

        res.json({
                message: 'Gel All Movie Review Success',
                data: data
            })       
    } catch (error) {
        res.status(500).json({
            message: 'Error Get Movie Review',
            serverMessage: error,
        })
    }
}

const createNewMovieReview = async (req, res) => {
    const {body} = req

    if(!body.movieName || !body.movieReview ) {
        res.status(400).json({
            message: 'Data Salah',
            data: null,
        })
    }

    try {
        await movieReviewsModel.createNewMovieReview(body)
        res.status(201).json({
            message: 'CREATE new Movie Review success',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error Post Movie Review',
            serverMessage: error,
        })
    }
}

const updateMovieReview = async (req, res) => {
    const {id} = req.params
    const {body} = req
    try {
        await movieReviewsModel.updateMovieReview(body, id)
        res.json({
            message: 'UPDATE Moview Review Success',
            data: { 
                id: id,
                ...body,
            }
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error Get Movie Review',
            serverMessage: error,
        })
    }    
}

const deleteMovieReview = async (req, res) => {
    const {id} = req.params
    try {
        await movieReviewsModel.deleteMovieReview(id)
        res.json({
            message: 'DELETE Movie Review Success',
            data: null
        })
        
    } catch (error) {
        res.status(500).json({
            message: 'Error Get Movie Review',
            serverMessage: error,
        })
    }
}

    module.exports = { 
    getAllMovieReview,
    createNewMovieReview,
    updateMovieReview,
    deleteMovieReview,
 }


    // DUMMY DATA
    // const getAllMovieReview = (req, res) => {
    //     const data = {
    //         id: '1',
    //         name: 'Satria Yudha',
    //         email: 'satriayudha01@gmail.com',
    //         address: 'Depok',
    //     }
    //     res.json({
    //         message: 'Gel All Movie Review Success',
    //         data: data
    //     })
    // }

    // const createNewMovieReview = (req, res) => {
    //     console.log(req.body)
    
    //     res.json({
    //         message: 'CREATE new movie review success',
    //         data: req.body,
    //     })
    // }

        // const setMovieReview = (req, res) => {
    //     if(!req.body) {
    //         res.status(400)
    //         throw new Error("Kolom Formulir Tidak Boleh Kosong")
    //     }
    //     res.status(201).json({
    //         message: `Task added successfully`
    //     })
    // }

    // const updateMovieReview = (req, res) => {
    //     const {id} = req.params
    
    //     console.log('id': id)
    //     res.json({
    //         message: 'UPDATE Moview Review Success',
    //         data: req.body,
    //     })
        
    // }

    // const deleteMovieReview = (req, res) => {
    //     const {id} = req.params
    //     res.json({
    //         message: 'DELETE Movie Review Success',
    //         data: {
    //             id: id,
    //             movieName: 'Gogopower Rangers',
    //             movieRevie: 'Good Film',
    //         }
    //     })
    // }
