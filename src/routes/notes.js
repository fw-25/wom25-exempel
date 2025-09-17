const express = require('express')
const { PrismaClient } = require('@prisma/client')

const router = express.Router()
const prisma = new PrismaClient()

// ersätts senare med riktig data från DB
const tempData = [
    { text: "hej" },
    { text: "morjens"}
]

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

router.post('/', (req, res) => {
    console.log("POST")

    // simulering av SQL INSERT INTO....
    tempData.push(req.body)

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