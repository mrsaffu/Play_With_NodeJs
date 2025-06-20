const express = require('express')
let app = express()
const db = require('./db')
const Person = require('./Models/person')
app.use(express.json())




app.get('/', (req, res) => {
    res.send("Welcome to my Hotel")

})

app.post('/person', async (req, res) => {
    try {
        const data = req.body;  // data come from client and stored req.body
        console.log("req.body ::", data);

        // ! create newPerson document using mongoose model
        let newPerson = new Person(data)

        // !save Data to MongoDb
        let response = await newPerson.save()
        console.log("Data Saved");
        res.status(200).json({ message: "Data Saved Sucessfully", data: response })

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" })
    }
})

// ! get all details Details
app.get('/person', async (req, res) => {
    try {
        let data = await Person.find()
        console.log(data);
        console.log("data Fetch Sucessfully");
        res.status(200).json({ message: "Data Fetch SucessFully", data: data })

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Interal Server error" })
    }
})




app.listen(3000, () => {
    console.log("listen on port no 3000");
})