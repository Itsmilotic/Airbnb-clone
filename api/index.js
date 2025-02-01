const express = require('express');
const app = express();
const mongoose = require("mongoose");
const cors = require('cors');
require('dotenv').config()
const User = require('./models/User.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const imageDownloader = require('image-downloader');
const Place = require('./models/Place.js')

const cookieParsesr = require('cookie-parser'); //to detect cookie at refresh

// const saltRounds = bcrypt.genSaltSync(10);
const jwtSecret = 'fagdsafasdhaguaida';

app.use(express.json());
app.use(cookieParsesr()); //cookie setup and generate with jwt at login
app.use('/uploads', express.static(__dirname+'/uploads')); //to show the image not just its link
// CORS setup
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}));

app.get('/test', (req,res) => {
    res.json('test running')
})

mongoose.connect(process.env.MONGO_URL);
 
app.post('/register', async(req,res) => {
    const {name, email, password} = req.body;


    try{
        const userDoc = await User.create({
            name,
            email,
            password:bcrypt.hashSync(password, 10), //password encrypt karo with bcrypt.js
        });
        res.json(userDoc);
    } catch (error) {
        res.status(422).json(error)
    }
})

app.post('/login', async (req, res) => {
    const {email, password} = req.body;

    const userDoc = await User.findOne({email});

    if(userDoc) {
        const passOk = bcrypt.compareSync(password, userDoc.password);

        if(passOk) {
            jwt.sign({
                email:userDoc.email,
                id:userDoc._id,
                // name: userDoc.name,

            }, jwtSecret, {}, (err, token) => {
                if(err) throw err;
                res.cookie('token', token).json(userDoc);//json web token
            });
        }else{
            res.status(422).json('not ok')
        }
    }else {
        res.json('not found')
    }

})

app.get('/profile', (req, res) => {
    const {token} = req.cookies;
    if (token) {
        // res.json({ message: 'Token found', token });

        jwt.verify(token, jwtSecret, {}, async (err, tokenData ) => {
            if (err) throw err;

            const {name, email, _id} = await User.findById(tokenData.id) //mongo mei search karega
            res.json({name, email, _id}); //deconstruct to not get password
        })
    } else {
        res.status(401).json({ message: 'No token found' });
    }

})

app.post('/logout', (req,res) => {
    res.cookie('token', '').json(true);
})

app.post('/upload-by-link', async(req, res) => {
    const {link} = req.body; //yarn image-downloader
    const newName = 'photo' + Date.now() + '.jpeg';
    await imageDownloader.image({
        url: link,
        dest: __dirname + '/uploads/' + newName,


    });
    res.json(newName);
})

app.post('/places', (req,res) => {
    const {token} = req.cookies;
    const {
        title,address,addedPhotos,description,price,
        perks,extraInfo,checkIn,checkOut,maxGuests,
    } = req.body;
    
    jwt.verify(token, jwtSecret, {}, async (err, tokenData ) => {
        if (err) throw err;

        const placeDoc = Place.create({
            owner:tokenData.id,price,
            title,address,photos:addedPhotos,description,
            perks,extraInfo,checkIn,checkOut,maxGuests,
            
        })
        res.json(placeDoc);
    })
})

app.get('/user-places', (req, res) => {
    const {token} = req.cookies;
    jwt.verify(token, jwtSecret, {}, async (err, tokenData ) => {
        const {id} = tokenData;
        res.json(await Place.find({owner:id}))
    })
})

app.get('/places/:id', async (req,res) => {
    const {id} = req.params;
    res.json(await Place.findById(id))
})

app.put('/places', async(req,res) => {
    const {token} = req.cookies;
    const {
        id,
        title, address, addedPhotos,
        description, perks, extraInfo,
        checkIn, checkOut, maxGuests,price
    } = req.body;

    jwt.verify(token, jwtSecret, {}, async (err, tokenData ) => {
        if (err) return res.status(403).json({ message: 'Unauthorized' });
        const placeDoc = await Place.findById(id);
        if(tokenData.id === placeDoc.owner.toString()){
            placeDoc.set({
                title,address,photos:addedPhotos,description,
                perks,extraInfo,checkIn,checkOut,maxGuests,price
            })
            await placeDoc.save();
            res.json('updated')
        }
    })
})

app.get('/places' , async (req,res)=> {
    res.json(await Place.find())
})


app.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
});
// 4xxKy54o0oskrPyp