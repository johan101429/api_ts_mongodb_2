import express from "express";
import morgan from 'morgan'
import path from 'path'

const app = express();
import indexRoutes from './routes/index'

//settings
app.set('port',process.env.PORT || 3003);

// middlewares
app.use(morgan('dev'));
app.use(express.json());

// router
app.use('/api', indexRoutes);

//this folder for this aplication will be used to store public files

app.use('/uploads',express.static(path.resolve('uploads')))



export default app;