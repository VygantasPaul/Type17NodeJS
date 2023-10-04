const express = require("express");
const mongoose = require('mongoose');
const app = express();
require('dotenv').config()
const taskRouter = require("./routes/movie");
app.use(express.json());
app.use(taskRouter)

const cors = require('cors');
app.use(cors());

mongoose.connect(process.env.DB_CONNECTION)
    .then(() => console.log('Connected!')).catch((error) => console.log(error));


// eslint-disable-next-line no-undef
app.listen(process.env.PORT, () => {
    // eslint-disable-next-line no-undef
    console.log("App started", process.env.PORT);
})