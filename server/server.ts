

import * as express from 'express';
var cors = require('cors');
import { Application } from "express";
import { getAllCourses, getCourseById } from "./get-courses.route";
import { searchLessons } from "./search-lessons.route";
import { loginUser } from "./auth.route";
import { saveCourse } from "./save-course.route";

const bodyParser = require('body-parser');



const app: Application = express();
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
  next();
});

app.use(bodyParser.json());

app.route('/api/login').post(loginUser);

app.route('/api/courses').get(getAllCourses);

app.route('/api/courses/:id').put(saveCourse);

app.route('/api/courses/:id').get(getCourseById);
app.route('/api/lessons').get(searchLessons);



const httpServer = app.listen(9000, () => {
  console.log("HTTP REST API Server running at http://localhost:" + httpServer.address().port);
});




