import  express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import UsersModel from './models/Users.js'
import resumeRoutes from './routes/resumeRoutes.js'

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/Users");

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    UsersModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Success")
                } else {
                    res.json("The password is incorrect")
                }
            }else{
                res.json("No record existed")
            }
        })
})

app.post('/register', (req, res) => {
    UsersModel.create(req.body)
        .then(Users => res.json(Users))
        .catch(err => res.json(err))
})

app.use('/api/resume-builder', resumeRoutes )


app.listen(3001, () => {
    console.log("server is running")
})