const mongoose = require("mongoose");

const PreferrenceSchema = mongoose.Schema(
  {

    
  },
  {
    timestamps: true,
  }
);


const PreferrenceModel = mongoose.model("Preferrence", PreferrenceSchema)
module.exports = PreferrenceModel;
