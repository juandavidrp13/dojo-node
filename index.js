const express = require("express");
const PORT = 3000;
const cors = require('cors');
const app = express();

const mongoose = require('mongoose');
require('./app/routes/spoti.router.js')(app);
require('./app/routes/spoti.router.js')(app);

mongoose.set('useUnifiedTopology', true);
mongoose.set('useNewUrlParser', true);

mongoose.connect(uri, (err, res) => {
 
    if (err) throw err;
    console.log("Base de datos online")
 }); 


const corsOptions = {
    origin: "http://localhost:3000"
 };


app.use(cors(corsOptions));

 app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
 });


 app.get('/', async function (req, res) {
    res.send('Espoti fai')
 })

