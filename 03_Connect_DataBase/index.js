const express = require('express')
let app = express()
const db = require('./db')
const personRoutes = require('./Routes/person.Routes')
const menuRoutes = require('./Routes/menu.Routes')
app.use(express.json())




app.get('/', (req, res) => {
    res.send("Welcome to my Hotel")

})

// ! use Router
app.use('/person', personRoutes)
app.use('/menu', menuRoutes)






app.listen(3000, () => {
    console.log("listen on port no 3000");
})