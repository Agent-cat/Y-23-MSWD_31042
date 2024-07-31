const express = require("express");
const { db } = require("./Database/User");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("vishnu");
});
app.get("/signin",  (req, res) => {
  const data =  db
    .findOne({
      Username: req.body.Username,
      Password: req.body.Password,
    })
    .then((data) => {
      if (data === null) {
        res.json({
          msg: "error",
          data: "No User Found",
        });
      }
      res.json({
        msg: "success",
        data: data,
      });
    })
    .catch((err) => {
      res.json({
        msg: "error",
        data: err.message,
      });
    });
});
app.post("/signup", async (req, res) => {
  await db.create({
    Username: req.body.Username,
    Password: req.body.Password,
  });
  res.json({
    msg: "created",
  });
});
app.listen(3008, () => {
  console.log("Example app listening at http://localhost:3008");
});
