const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://z4cope:Mm0122629004@cluster0.pz3yh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );
    console.log(`Mongo Connected ${conn.connection.host}`);
  } catch (err) {
    console.log(`error: ${err.message}`);
    process.exit();
  }
};

module.exports = connectDB;
