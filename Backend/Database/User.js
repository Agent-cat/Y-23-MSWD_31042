const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://admin:vishnu%402005@cluster0.cnfu0ri.mongodb.net/Erp-Database"
  )
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log(err.message);
  });

const UserSchema = new mongoose.Schema({
  Username: {
    type: String,
    required: true,
    
  },
  Password: {
    type: String,
    required: true,
  },
});
const db = mongoose.model("Users", UserSchema);
module.exports = {
  db,
};


