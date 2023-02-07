import express from 'express';
import bodyparser from 'body-parser';

import usersrouter from './routes/users.js';


const app = express();
const PORT = 5000;

app.use(bodyparser.json());

app.use('/user',usersrouter);

app.get('/',(req,res)=>{
    console.log("Taha")
    res.send("taha")
})


app.listen(PORT,()=>console.log(`The server run one ${PORT} ...`))

