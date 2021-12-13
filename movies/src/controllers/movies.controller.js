const express = require("express");

const Movie = require("../models/movies.model");

const authenticate = require("../middlewares/authenticate");

const router = express.Router();

router.post("/", authenticate, async (req, res) => {
  try {
    const user = req.user;

    const movie = await Movie.create({
     
       name:req.body.name,
       actor: req.body.actor,
       language: req.body.language,
       director:req.body.director,
       poster_url: req.body.poster_url,
       user: user.user._id,
    });

    return res.status(201).json({ movie });
  } 
  catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
});

router.get("/", async (req, res) => {
    const Actor = req.query.actor || "sharukh";
  const movies = await Movie.find({ actor: Actor}).lean().exec();

  return res.send(movies);
});

module.exports = router;
