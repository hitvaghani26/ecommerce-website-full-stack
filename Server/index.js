import dotenv from 'dotenv';
import {app} from "./app.js"
import connectDB from './database/index.js';

const port = 3000;

dotenv.config({
    path: './.env'
})


connectDB()
.then(() => {
    app.listen(process.env.PORT , () => {
        console.log("server is running at ", process.env.PORT )
    })
})
.catch((error) => {
    console.log("mongodb Connection failed");
})
