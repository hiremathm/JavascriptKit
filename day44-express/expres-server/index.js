const express = require('express')

const app = express()
const port = 3000

app.listen(port, function(){
    console.log('listening to port ', 3000)
})


// confifugre reading incoming json data
// application level middle ware function
app.use(express.json())

// home page
app.get('/', function(req, res){
    res.send('Welcome to website')
})
// about page 
app.get('/about', function(req, res){
    res.send('Welcome to about page')
})
// products page
const products = [{id: 1, name: 'marker', price: 10}, {id: 2, name: 'book', price: 20},{id: 3, name: 'laptop', price: 1000}]
app.get('/products', function(req, res){
    res.send(products)
})
// users page
const users = [{id: 1, name: 'shiva'},{id: 2, name: 'ram'},{id: 3, name: 'rashmi'}]
app.get('/users', (req, res) => {
    res.send(users)
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id
    const user = users.find(function(user){
        return user.id == id
    })

    if(user){
        res.json(user)
    }else{      
        res.json({notice: 'User not found'})
    }
})

app.post('/users', (req, res) => {
    const user = req.body
    console.log("user details :: ",user)
    users.push(user)
    res.json({user, notice: "Successfully Created User"})
})

app.delete('/users/:id', (req, res) => {
    const id = req.params.id
    let remaining_users  = users.filter(function(user){
        return user.id != id
    })
    res.json({notice: "Successfully deleted User",users: remaining_users})
})

app.put('/users/:id', (req, res) => {
    const body = req.body
    const id = req.params.id
    let user  = users.find(function(user){
        return user.id == id
    })
    user.id = id
    user.name = body.name
    console.log("usre", user)
    res.json({notice: "Successfully updated User",user})
})