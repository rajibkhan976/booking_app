const express = require("express");
const routes = require("./routes");

const app = express();

const port = process.env.PORT || 5000;

const cors = require("cors");

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use((req, res, next) => {
    next();
})

app.use('/uploads', express.static('uploads'));

app.use('/', routes);

app.listen(port, () => {
    console.info(`Server is listening on port ${port}.`);
})