// IMPORT PACKAGES
import express from 'express'
import client from './src/db/connect.mjs' 
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import cors from 'cors'
import session from 'express-session'

//IMPORT ROUTERS


import loginRouter from './src/api/auth/login.mjs'
import registerRouter from './src/api/auth/register.mjs'
import logoutRouter from './src/api/auth/logout.mjs'

// IMPORT MIDDLEWARE
import auth from './src/middleware/verifyToken.mjs'


//IMPORT CONTROLLERS
import insertProfileinfos from './controllers/insertProfileInfos.mjs'
import getProfileInfos from './controllers/getProfileInfos.mjs'
import insertPost from './controllers/insertPost.mjs'
import getAllPosts from './controllers/getAllPosts.mjs'

const app = express() 
const PORT = 3000
const router = express.Router()


//USE 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(express.json())
app.use(session({
    secret: 'coucou',
    resave: false,
    saveUninitialized: false
}));

//CORS
app.use(cors())

//CLASSIC 
app.use('/', loginRouter)
app.use('/', registerRouter)
app.use('/', auth, logoutRouter)

// REQUEST
//POST 
app.post('/insertProfileInfos', auth, insertProfileinfos)
app.post('/profile/:id/insertPost', auth, insertPost)

//GET
app.get("/profile/:id", auth, getProfileInfos)
app.get('/getAllPosts', auth, getAllPosts)

app.get('/', (req, res) => {
    res.sendStatus(200)
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Petfinder app listening on port 3000!');
});