const User = require("../models/user");

const add_user = async (req, res) => {
//   console.log(req.body, "addinguser-------");
  const {
    accessCode,
    fname,
    lname,
    email,
    address,
    city,
    unit,
    cellphone,
    state,
    country,
    zip,
  } = req.body;

  console.log(req.body);
  const user = new User({
    accessCode: accessCode,
    fname: fname,
    lname: lname,
    email: email,
    address: address,
    city: city,
    state: state,
    country: country,
    unit: unit,
    cellphone: cellphone,
    zip: zip,
  });
// console.log(user,'data in user')
try {
    const savedUser = await user.save();
    res.status(200).json({ user: savedUser }); // 'Json' should be changed to 'json'
  } catch (error) {
    res.status(400).send(error);
  }
};


const loginUser = async (req, res) => {
    try {
      const { email, accessCode } = req.body;
      console.log(accessCode,'login pass---')
  
      // Check if user with given email exists
      const user = await User.findOne({ email });
      console.log(user, "value of user-------");
  
      if (!user) {
        return res.status(400).json({ message: "User not found" });
      }
      console.log(user.accessCode, "accesscode-----");
      // Validate password
      if (accessCode!=user.accessCode) {
        return res.status(400).json({ message: "Invalid accessCode" });
      }
      // User exists and password is valid
  
      return res.status(200).json({ status: true, data: "Login successfully" });
    } catch (error) {
      return res.status(400).json({ message: "something Went Wrong" });
    }
  };

module.exports = {
  add_user,
  loginUser
};
