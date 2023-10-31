const express = require("express");

const app = express();
const port = 8585;

require('./db/conn');
app.use(express.json());
const User=require('./model/userSchema');

//all routes are imports
app.use(require('./router/auth'))


//middleware

const middleWare=(req,res,next)=>{
console.log("i am middleware");
// next()
}
middleWare()


// app.get('/about', middleWare,(req, res) => {
//     res.send("hello about page")
// })

// app.get('/contact', (req, res) => {
//     res.send("hello contact page")
// })

// app.get('/signin', (req, res) => {
//     res.send("hello signin page")
// })

// app.get('/signup', (req, res) => {
//     res.send("hello signup page")
// })

app.listen(port, () => {
    console.log(`port is running on ${port}`)
})