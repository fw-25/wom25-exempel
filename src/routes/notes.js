const express = require('express')
const router = express.Router()

// ersätts senare med riktig data från DB
const tempData = [
    { text: "hej" },
    { text: "morjens"}
]

router.get('/', (req, res) => {
    res.send(tempData)
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