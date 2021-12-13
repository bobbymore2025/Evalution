const express = require("express");

const Show = require("../models/show.model");



const router = express.Router();



router.get("/", async (req, res) => {
    const Movieid = req.query.movie_id || "titanic";
  const movies = await Movie.find({ movies_ids: Movieid}).lean().exec();

  return res.send(movies);
});

module.exports = router;
