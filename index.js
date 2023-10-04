const express = require("express");

const app = express();

const mongoose = require('mongoose');

require('dotenv').config()
const taskRouter = require("./routes/movie");
app.use(express.json());
app.use(taskRouter)

const cors = require('cors');
app.use(cors());

mongoose.connect('mongodb+srv://vygantas01:vygantas01@cluster0.uk5gsno.mongodb.net/')
    .then(() => console.log('Connected!'));

// eslint-disable-next-line no-undef
console.log(process.env.DB_CONNECTION);

// eslint-disable-next-line no-undef
app.listen(process.env.PORT, () => {
    // eslint-disable-next-line no-undef
    console.log("App started", process.env.PORT);
})