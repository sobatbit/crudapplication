const getCrud = (req, res) => {
    res.status(200).json({
        message: 'This is the list of tasks'
    })
}

const setCrud = (req, res) => {
    if(!req.body) {
        res.status(400)
        throw new Error("Kolom Formulir Tidak Boleh Kosong")
    }
    res.status(201).json({
        message: `Task added successfully`
    })
}

const updateCrud = (req, res) => {
    res.status(200).json({
        message: `Task updated successfully ${req.params.id}`
    })
}

const deleteCrud = (req, res) => {
    res.status(200).json({
        message: `Task deleted successfully ${req.params.id}`
    })
}

module.exports = { 
    getCrud,
    setCrud,
    updateCrud,
    deleteCrud,
 }
