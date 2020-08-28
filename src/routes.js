import express from 'express';
const routes = express.Router();
import connection from './database/index.js';

routes.get('/',(req,res)=>{
    console.log(connection);
    return res.json({hello:"world"});
})

export default routes;