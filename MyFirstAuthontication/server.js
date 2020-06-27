const express = require('express');
const app = express()
const bcrypt = require('bcrypt')
const users = []

app.set('view-engine', 'ejs')
app.use(exppress.urlencoded({ extended: false }))
app.get('/', (req, res) => {
    res.render('index.ejs', { name: 'Michal' })
})

app.get('/login', (req, res) => {
    res.render('login.ejs')

})
app.post('/login', (req, res) => {

})

app.get('/register', (req, res) => {
    res.render('register.ejs')

})

app.post('/register', async (req, res) => {
    try {
        const hashedPassword = bcrypt.hash(req.body.password, 10)
        users.push({
            id: Data.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })
        res.redirect('/login')
    } catch{
        res.redirect('/register')
    }
    console.log(users)
})
app.listen(3000)
