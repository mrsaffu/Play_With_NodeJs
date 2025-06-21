const express = require('express')
const routes = express.Router()
const MenuItems = require('../Models/minu')


// ! Menu Items

// ^ Post 
routes.post('/', async (req, res) => {
    try {
        const data = req.body;
        console.log(data);
        let newMenuItems = new MenuItems(data)
        const response = await newMenuItems.save()
        console.log("Menu Items Saved ");
        console.log(response);

        res.status(200).json({ message: "Menu Items Saved ", data: response })

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" })

    }
})

// ^ Get

routes.get('/', async (req, res) => {
    try {
        const data = await MenuItems.find()
        console.log("menu Items get sucessfully :", data);
        res.status(200).json({ message: 'Menu Items Fetch Sucessfully', data: data })
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" })
    }
})

module.exports = routes