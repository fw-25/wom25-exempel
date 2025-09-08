const express = require('express')
// middleware
const logRequest = require('./middleware/log-request')
const fetchProduct = require('./middleware/fetch-product')

const PORT = 3000

const app = express()

app.get('/', (req, res) => {
    res.send("<h1>Node works!</h1>")    
})

app.use(logRequest)

app.get('/shop', fetchProduct, (req, res) => {
    res.send(`<h1>Välkommen till shoppen!</h1> vi säljer ${req.product}`)    
})

app.get('/api', (req, res) => {
    res.json({ greeting: "Hello!"})    
})




/**
 * Code Challenge: Expressrutt
 */
app.get('/hello/:name', (req, res) => {
    console.log(req.params)
    res.send(`Hello ${req.params.name}`)
})
app.get('/weekdays/:wd', (req, res) => {
    // An array with the days of the week in English
    const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    res.send(weekdays[req.params.wd-1])
})



app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})