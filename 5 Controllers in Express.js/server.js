const express = require("express");
const router = require('./router/auth-router');
const app = express();
const port = 3000;

//? Mount the Router: To use the router in your main Express app, your can "mount it ata specific URL prefix"
app.use('/api/auth',router);



app.get("/", (req, res) => {
    res.status(200).send("<h2>Welcome to MERN course</h2>");
});

app.get("/register", function (req, res) {
    res.status(200).send("<h2>Welcome to Registration Page</h2>");
});

app.listen(port, () => {
    console.log(`Example app listening on port http://127.0.0.1:${port}`);
});
