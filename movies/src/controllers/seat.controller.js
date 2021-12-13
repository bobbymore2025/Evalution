const express = require("express");

const Seat = require("../models/seats.model");


const authenticate = require("../middlewares/authenticate");

const router = express.Router();

router.post("/", authenticate, async (req, res) => {
  try {
    const user = req.user;

    const bookseats = await Seat.create({
     
       
       user: user.user._id,
    });

    return res.status(201).json({ bookseats });
  } 
  catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
});



router.get("/", async (req, res) => {
    const Showid = req.query.showid || "titanic";
  const seat = await Seat.find({show_id: Showid}).lean().exec();

  return res.send(seat);
});

module.exports = router;
