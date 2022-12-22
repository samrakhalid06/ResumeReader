import createError from 'http-errors';
import express, { json, urlencoded } from 'express';
import { join } from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { json as _json, urlencoded as _urlencoded } from 'body-parser';
import { Promise, connect } from "mongoose";

import indexRouter from './routes/index';
import resumesRouter from './routes/resumes';
import skillsRouter from './routes/skills';

var app = express();

var connectionString = 'mongodb+srv://sam:123@cluster0.pyb7d.mongodb.net/resumereader?retryWrites=true&w=majority'
connect(connectionString);

// view engine setup
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, 'public')));
app.use(_json());
app.use(_urlencoded({ extended: true }))

app.use('/', indexRouter);
app.use('/resumes', resumesRouter);
app.use('/skills', skillsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
