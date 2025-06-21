const Person = require('../Models/person')


// ^ Post 
const createPerson = async (req, res) => {
    try {
        const data = req.body;  // data come from client and stored req.body
        console.log("req.body :", data);

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
}



// ! get all details Details
const getAllPerson = async (req, res) => {
    try {
        let data = await Person.find()
        console.log(data);
        console.log("data Fetch Sucessfully");
        res.status(200).json({ message: "Data Fetch SucessFully", data: data })

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Interal Server error" })
    }
}


const getPersonByWork = async (req, res) => {
    try {
        const workType = req.params.workType;
        if (workType === "chef" || workType === "water" || workType === "manager") {
            const response = await Person.find({ work: workType })
            console.log("Response fetched by work");
            res.status(200).json({ message: 'Person Fetch Sucessfully by work', data: response })

        } else {
            res.status(404).json({ error: "Invalid Work type" })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" })

    }
}

module.exports = {
    createPerson,
    getAllPerson,
    getPersonByWork

}