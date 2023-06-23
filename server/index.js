//calling Express in this file
const express=require('express')
// initiating Express to create server
const app=express();

//calling dotenv in this file
const dotenv = require("dotenv");

//calling mongoose in this file
const mongoose = require("mongoose");
//calling cors in this file

const cors = require("cors");

dotenv.config();
// connect to db
async function connectToDatabase() {
    try {
      await mongoose.connect('mongodb://localhost/RealEstate', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Connected to the database');
    } catch (error) {
      console.error('Failed to connect to the database:', error);
    }
  }
  
  // Call the connectToDatabase function to establish the connection
  connectToDatabase();
//    import routes from product in route
// const productRoutes=require("./routes/product")

// import routes from user in route

// const userRoutes=require("./routes/user")
const userRoutes=require("./routes/userRoute")

// route middleware
app.use(express.json())
app.use(cors())
// app.use("/api/products",productRoutes)
app.use("/api/users",userRoutes)
// app.use("/api/story",storyRoutes)

// user Registration

//Server Created
app.set('port', (process.env.PORT || 5001));
app.listen(app.get('port'), function() {
    console.log('Server started on port '+app.get('port'));
});