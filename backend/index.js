const PORT = 4010;
const express = require('express')
app = express()

const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const multer = require('multer')
const path = require('path')
const cors = require('cors');
// const { log } = require('console');

app.use(express.json())
app.use(cors())

//Database Connection

mongoose.connect("mongodb://localhost:27017/ecommerce")
    .then(() => {
        console.log("Connected to mongodbb");
    })
    .catch(err => {
        console.log("Failed to connect to mongodb atlas", err.message);
    });


const Product = mongoose.model("Product", {
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
    },
    new_price: {
        type: Number,
        required: true,
    },
    old_price: {
        type: Number,
        required: true,
    },

    available: {
        type: Boolean,
        default: true,
    },
})

const Users = mongoose.model('Cat', {
    name: {
        type: String,

    },
    email: {
        type: String,
        unique: true

    },
    password: {
        type: String

    },
    cartData: {
        type: Object

    },
    date: {
        type: Date,
        default: Date.now
    }

})
