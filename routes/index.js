import express from 'express';
import connection from '../sql_connection.js'


const main = express.Router();
main.get('/', async (req, res) => {
    try {
        const [data] = await connection.query(`
                SELECT * 
                FROM blog
                `)
        res.render('index', { page: 'index', css: 'index.css', js: 'index.js', data: data })
    } catch (err) {
        console.log(`something chujova`);
    }

})

export default main;