import express from 'express';

import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import ejs from 'ejs';


import routes from './routes/index';
// import users        from './routes/users'
console.log(__dirname);

const app = express();

app.set('views', path.join(__dirname, '../public'));
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use('/', routes);

const server = app.listen(3000, () => {

  const {address, port} = server.address();

  console.log(`Example app listening at http://${address}:${port}`);
});

// app.use('/', routes);
// app.use('/users', users);

// // using arrow syntax
// app.use((req, res, next) => {
//   let err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// if (app.get('env') === 'development') {
//   app.use((err, req, res, next) => {
//     res.status(err.status || 500);
//     res.render('error', {
//       message: err.message,
//       error: err
//     });
//   });
// }

// app.use((err, req, res, next) => {
//   res.status(err.status || 500);
//   res.render('error', {
//     message: err.message,
//     error: {}
//   });
// });


module.exports = app;
