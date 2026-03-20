import express from 'express'
import logger from 'morgan'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'

import database from './configs/database.js';
import notFoundMiddleware from './middlewares/notFound.js'
import Routers from './routes/index.js'
import initializationDatabase from './middlewares/database.middleware.js'

dotenv.config({ override: true, debug: true })
const app = express();

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

initializationDatabase(database)


app.use(Routers);

// catch 404 and forward to error handler
app.use(notFoundMiddleware);

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.render('error');
});

export default app
