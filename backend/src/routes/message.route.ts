import express from "express";

const router = express.Router();

router.get("/send", (req, res) => {
    res.send("send endpoint")
})

// router.get("/login", (req, res) => {
//     res.send("login endpoint")
// })

// router.get("/logout", (req, res) => {
//     res.send("logout endpoinjjjt")
// })

export default router;