const express = require("express");
const app=express();
const { register, login } = require("./controllers/auth");

const moviesController = require("./controllers/movies.controller");
const showsController= require("./controllers/show.controller");
 const seatsController= require("./controllers/seat.controller");



app.use(express.json());

app.post("/register", register);
app.post("/login", login);

app.use("/movies", moviesController)
app.use("/shows", showsController);
app.use("/seats", seatsController);

module.exports = app;
