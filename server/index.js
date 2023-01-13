const express = require('express');
const app = express();

//Connection to DB
const connectToMongo = require('./db')
connectToMongo();

const dotenv = require("dotenv");
const cors = require('cors')
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(express.json());

app.use(cors());
dotenv.config();

//routes
const userRouter = require('./routes/userRoutes');
const passwordReset=require("./routes/passwordReset")

app.get('/', (req, res) => {
     res.send('Hello World!');
})

app.use("/user", userRouter)
app.use("/password-reset",passwordReset)
//------------tentative apis list

//--User featues
//login--done
//reset pwd/forgot pwd
//submit and save details--done
//get details --debugging

//update details --code

//notifs
//nodemailer...to tell about deadlines

//--Admin features
//login --done
//show users --done
//user info --done
//search user feature --frontend
//validate --frontend
//broadcast/create form
//delete user --code


app.listen(port, () => {
	console.log(`Web-app backend is running at http://localhost:${port}`);
});
