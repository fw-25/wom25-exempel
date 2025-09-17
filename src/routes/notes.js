const express = require('express')
const { PrismaClient } = require('@prisma/client')

const router = express.Router()
const prisma = new PrismaClient()

router.get('/', async (req, res) => {
    try {
        const notes = await prisma.note.findMany({
            where: { author_id: 1 }
        })
        res.json(notes)
    } catch (error) {
        console.log(error)
        res.status(500).send({msg: "Error"})
    }
})

router.post('/', async (req, res) => {

    try {
        const newNote = await prisma.note.create({
            data: {
                author_id: 1,
                note: req.body.text
            }
        })  

        res.json({msg: "New note created", id: newNote.id})

    } catch (error) {
        console.log(error)
        res.status(500).send({msg: "Error: POST failed"})
    }


    res.send({ 
        method: req.method, 
        body: req.body
    })
})

router.put('/:id', (req, res) => {
    // SQL: UPDATE ... WHERE id = :id
    tempData[req.params.id] = req.body
        
    res.send({ 
        method: req.method, 
        body: req.body
    })

})

router.delete('/:id', (req, res) => {
    // SQL: DELETE FROM notes WHERE id = :id
    tempData.splice(req.params.id)
    res.send({ 
        method: req.method, 
        msg: `Deleted ${req.params.id}`
    })

})

module.exports = router