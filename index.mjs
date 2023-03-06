// IMPORT PACKAGES
import express from 'express'
import client from './src/db/connect.mjs' 
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import cors from 'cors'

//IMPORT ROUTERS

import loginRouter from './src/api/auth/login.mjs'
import registerRouter from './src/api/auth/register.mjs'

// IMPORT MIDDLEWARE
import auth from './src/middleware/verifyToken.mjs'

//IMPORT CONTROLLERS


const app = express() 
const PORT = 3000
const router = express.Router()


//USE 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(passport.initialize())
app.use(express.json())

//CORS
app.use(cors())

//CLASSIC 
app.use('/', loginRouter)
app.use('/', registerRouter)

app.get('/', (req, res) => {
    res.sendStatus(200)
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Petfinder app listening on port 3000!');
});