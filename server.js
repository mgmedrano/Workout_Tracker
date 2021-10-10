const express = require('express');
const mongoose = require('mongoose');
const morgan = require ('morgan');

const app = express();
const PORT = process.env.PORT || 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
