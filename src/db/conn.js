const  mongoose=require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/mernstack",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    // useFindAndModify:false
}).then(()=>{
    console.log("connection is successful")
}).catch((err)=>{
console.log("No connection ")
})


// const DB="mongodb+srv://arthpatel6737ap:arth.6737@cluster0.bqcjz9s.mongodb.net/"


// mongoose.connect(DB,{
//     useNewUrlParser:true,
//     useCreateIndex:true,
//     useUnifiedTopology:true,
//     useFindAndMOdify:false

// }).then(()=>{
//     console.log("connection successfull mongo")
// }).catch(()=>{
//     console.log("no connection mongo")
// })