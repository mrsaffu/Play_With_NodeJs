const MenuItems = require('../Models/minu')


// ! Menu Items

// ^ Post 
const createMenu = async (req, res) => {
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
}


// ^ Get
const getAllMenuItems = async (req, res) => {
    try {
        const data = await MenuItems.find()
        console.log("menu Items get sucessfully :", data);
        res.status(200).json({ message: 'Menu Items Fetch Sucessfully', data: data })
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" })
    }
}

// ! get menu items by Taste .
const getMenuItemsByTest = async (req, res) => {
    try {
        const testType = req.params.testType;
        if (testType === 'sweet' || testType === "spicy" || testType === "sour") {
            const response = await MenuItems.find({ taste: testType })
            console.log('Menu Item Fetch Sucessfully by Test');
            res.status(200).json({ message: "Menu Items Fetch Sucessfully by Items", data: response })
        } else {
            res.status(404).json({ error: 'Menu Test Type Invalid' })
        }

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' })
    }
}


// ! menu Update by Id
const menuUpdate = async (req, res) => {
    try {
        const menuId = req.params.id;
        const updatedMenu = req.body;

        const response = await MenuItems.findByIdAndUpdate(menuId, updatedMenu, {
            new: true,
            runValidators: true
        })
        if (!response) {
            return res.status(404).json({ error: 'Menu not fount .!' })
        }
        console.log('Menu updated');
        res.status(200).json({ message: "Menu updated Sussfully", data: response })


    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'internal server error' })

    }
}

// ! Delete Menu

const menuDelete = async (req, res) => {
    try {
        const menuId = req.params.id;
        const response = await MenuItems.findByIdAndDelete(menuId)
        if (!response) {
            console.log('Menu not found ..!');
            res.status(404).json({ error: 'Menu not found ...!' })
        }
        console.log("Menu deleted");
        res.status(200).json({ message: "Menu deleted sucessfully", data:null })
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "internal server error" })

    }
}

module.exports = {
    createMenu,
    getAllMenuItems,
    getMenuItemsByTest,
    menuUpdate,
    menuDelete
}
