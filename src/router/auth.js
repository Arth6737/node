const express = require('express');
const router = express.Router();
require("../db/conn");
const User = require('../model/userSchema');
const bcrypt=require("bcryptjs")

router.get('/', (req, res) => {
    res.send("hello word from the server")
})

router.post('/register', async (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;
    

    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "plz filled the field property" })
    }
    try {

        const userExist = await User.findOne({ email: email })
        if (userExist) {
            return res.status(422).json({ error: "Email already Exist" })
        } else if (password != cpassword) {
            return res.status(422).json({ error: "password are not matching" })
        }

        const user = new User({ name, email, phone, work, password, cpassword });

        const userRegister = await user.save();

        if (userRegister) {
            res.status(201).json({ message: "user register successfuly" })
        } else {
            res.status(500).json({ error: "failed register" })
        }
    } catch (error) {
        console.log(error)
    }
});

router.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "please fill the data" })
    }

    try {
        // first time email check
        const userEmail = await User.findOne({ email: email })
        if (userEmail) {
            // jo email complete hase to second time password check
            const userPass=await bcrypt.compare(password,userEmail.password);
            if(!userPass){
                res.status(400).json({ message: "login successfully" })
            } else{
                res.json({ message: "invalid password" })
            }
        } else {
            res.json({ message: "invalid Credential" })
        }


    } catch (error) {
        console.log(error)
    }
})



module.exports = router