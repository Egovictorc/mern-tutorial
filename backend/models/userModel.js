const mongoose = require("mongoose");

const schema = mongoose.Schema;


const userSchema = schema({

   name: {
       type: String,
       required: [true, "please add a name"]
   },
   email: {
       type: String,
       required: [true, "please add an email"],
       unique: true
   },
   password: {
       type: String,
       required: [true, "please add a password"]
   },
}, 
{
    timestamps: true
})




module.exports = mongoose.model("User", userSchema);