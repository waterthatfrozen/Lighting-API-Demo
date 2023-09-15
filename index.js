const http = require('http'),
    express = require('express'),
    dotenv = require('dotenv'),
    bodyParser = require('body-parser');
const app = express();
dotenv.config();

// Define constant path and server port
const PATH = __dirname
const PORT = process.env.SERVER_PORT || 3500

// parse request body as JSON object
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// open server
app.use(express.static(PATH));
http.createServer(app).listen(PORT, () => {
    console.log("listening at http://localhost:"+PORT);
});

app.get("/", (req, res) => {res.send({
    message: "Hello world, this is API demo for dummies",
    currentTime: new Date().getTime()
})});

app.post("/send-data", (req, res) => {
    if(req.body.data === "DEMO"){
        res.send({mesage: "Demo data recevied"});
    }else{
        res.status(400).send({mesage: "BAD BOY"});
    }
})