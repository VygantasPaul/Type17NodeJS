const express = require("express");
const app = express();
require('dotenv').config()
const taskRouter = require("./routes/movie");
app.use(express.json());
app.use(taskRouter)

const cors = require('cors');
app.use(cors());

// eslint-disable-next-line no-undef
console.log(process.env.DB_CONNECTION);

// eslint-disable-next-line no-undef
app.listen(process.env.PORT, () => {
    // eslint-disable-next-line no-undef
    console.log("App started", process.env.PORT);
})