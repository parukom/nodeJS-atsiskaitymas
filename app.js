// modules importing
import 'dotenv/config';
import express, { urlencoded } from 'express';
import cors from 'cors';
import path from 'path';
import cookieParser from 'cookie-parser';

// importing routes 
import index from './routes/index.js'
import login from './routes/login.js'
import register from './routes/register.js'

// usable constants
const app = express();
const port = process.env.PORT;
const corsOptions = {
    origin: `http://localhost:${port}`,
    optionsSuccsessStatus: 200
};

// routes to view folder using ejs
app.set('view engine', 'ejs');
app.set('views', './views');

// using usable constants
app.use(express.json());
app.use(cors(corsOptions));
app.use(express.static(path.resolve('public')));
app.use(urlencoded({ extended: false }));
app.use(cookieParser());


// routes to websites
app.use('/', index);
app.use('/login', login);
app.use('/register', register);


app.listen(port, console.log(`serveris ratatata ant ${port} porto`))