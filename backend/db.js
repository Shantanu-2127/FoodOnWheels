const mongoose = require("mongoose");
const { collection } = require("./models/User");

const mongoURL = "mongodb://127.0.0.1:27017/FoodOnWheels";

const mongoDB = async() => {
  try{
    await mongoose.connect(mongoURL);
    console.log('Connected to MongoDB successfully');
    const fetchedData =mongoose.connection.db.collection("food_items");
    const data = await fetchedData.find({}).toArray();
    const foodCategory = mongoose.connection.db.collection("food_catergory");
    catData = await foodCategory.find({}).toArray();
    global.food_items= data;
    global.food_category = catData;
    
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
};


module.exports = mongoDB;
