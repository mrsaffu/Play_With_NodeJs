const express = require('express')
let app = express()
const db = require('./db')
const Person = require('./Models/person')
const MenuItems = require('./Models/minu')
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


// ! Menu Items

// ^ Post 
app.post('/menu', async (req, res) => {
    try {
        const data = req.body;
        console.log(data);
        let newMenuItems = new MenuItems(data)
        const response = await newMenuItems.save()
        console.log("Menu Items Saved ");
        console.log(response);

        res.status(200).json({message:"Menu Items Saved ", data:response})

    } catch (err) {
        console.log(err);
        res.status(500).json({error:"Internal server error"})

    }
})

// ^ Get

app.get('/menu', async (req,res)=>{
try{
        const data = await MenuItems.find()
    console.log("menu Items get sucessfully :", data);
    res.status(200).json({message:'Menu Items Fetch Sucessfully', data:data})
}catch(err){
    console.log(err);
    res.status(500).json({error:"Internal Server Error"})
}
})



app.listen(3000, () => {
    console.log("listen on port no 3000");
})