const express = require('express')
const { createMenu, getAllMenuItems, getMenuItemsByTest, menuUpdate } = require('../Controller/menu.controller')
const MenuItems = require('../Models/minu')
const routes = express.Router()



routes.post('/', createMenu)
routes.get('/', getAllMenuItems)
routes.get('/:testType', getMenuItemsByTest)
routes.put('/update/:id', menuUpdate)
// routes.delete('/delete/:id', menuDelete)


module.exports = routes