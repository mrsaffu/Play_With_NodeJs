// creating the server 
let express = require('express')
let app = express()

app.get('/', (req, res) => {
    res.send("Welcome to my Hotel")
})
app.get('/chicken', (req, res) => {
    res.send("Sure sir ! i would  love to surve chicken")
})
app.get('/idly', (req, res) => {
    res.send("Sure sir ! i would  love to surve Idly")
})
app.get('/Dosa', (req, res) => {
    let customized_dosa = {
        name: 'rava_dosa',
        size: "10cm digram ",
        is_sambar: true,
        is_chutny: false

    }
    res.send(`Sure sir! I would love to serve Dosa.\nYour Dosa is ready:\n${JSON.stringify(customized_dosa, null, 2)}`);
})
app.get('/sweets', (req, res) => {
    res.send("Sure sir ! i would  love to surve sweet")
})


app.listen(3000, () => {
    console.log('server is running on port no 300');
})