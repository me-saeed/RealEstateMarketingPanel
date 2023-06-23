const User = require("../models/user");

const add_user = async (req, res) => {
  console.log(req.body, "addinguser-------");
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
console.log(user,'data in user')
try {
    const savedUser = await user.save();
    res.status(200).json({ user: savedUser }); // 'Json' should be changed to 'json'
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  add_user,
};
