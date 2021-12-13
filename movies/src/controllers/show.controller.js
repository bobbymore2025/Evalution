const express = require("express");

const Show = require("../models/show.model");



const router = express.Router();

router.post("/",  async (req, res) => {
  try {
  
    const show= await Show.create(req.body);

    return res.status(201).json({ show });
  } 
  catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
});


router.get("/", async (req, res) => {
    const Movieid = req.query.movie_id || "titanic";
  const shows = await Show.find({ movies_ids: Movieid}).lean().exec();

  return res.send(shows);
});

module.exports = router;
