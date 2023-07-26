const express = require('express');
const cors = require('./middlewares/cors');
const bodyParser = require('body-parser');
const mainRoute = require('./routes/main');
const userRoute = require('./routes/user');

const PORT = 8000;
const app = express();


app.use(cors);
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/',mainRoute);
app.use('/user',userRoute);

app.listen(PORT, ()=>{
    console.log(`servidor corriendo en el puerto ${PORT}`);
})
