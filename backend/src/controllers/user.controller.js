const User = require('../models/user.models');
const LoginData = require('../models/login.models');
const bcrypt = require('bcrypt');

const userRegister = async (req, res) => {
  console.log('req.body', req.body);
  try {
    const { name, email, mobile, password, username } = req.body;

    if (!password) {
      return res.status(400).json({
        success: false,
        message: 'Password is required!',
      });
    }

    // Check for existing users
    const isEmailExists = await User.findOne({ email });
    if (isEmailExists) {
      return res.status(400).json({
        success: false,
        message: 'Email already exists!',
      });
    }

    const isMobileExists = await User.findOne({ mobile });
    if (isMobileExists) {
      return res.status(400).json({
        success: false,
        message: 'Mobile number already exists!',
      });
    }
    const isUsername = await User.findOne({ username });
    if (isUsername) {
      return res.status(400).json({
        success: false,
        message: 'username already exists!',
      });
    }

    // Hash the password
    console.log('Hashing password...');
    const hashPassword = await bcrypt.hash(password, 10);

    // Create the user
    const user = new User({
      name,
      email,
      mobile,
      password: hashPassword,
      username,
    });
    const userData = await user.save();
  } catch (err) {
    console.log('err', err);
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};
const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log('req.body email:', email);
    const user = await User?.findOne({ email: email });
    console.log('User found:', user);
    console.log('user', user);
    if (!user) {
      return res.status(400).json({
        success: false,
        message: 'Email not found!',
      });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({
        success: false,
        message: 'Invalid password!',
      });
    }

    userData = new LoginData({
      email,
      password,
      time : new Date().getUTCDate(),
    })

    const userDetail = await userData.save()

    return res.status(200).json({
      success: true,
      message: 'Login successful!',
      // token: token, // Optionally send token
      user: userDetail, // Optionally send user details
    });
  } catch (err) {
    console.log('err', err);
  }
};
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    if (users.length > 0) {
      res.status(200).json({
        usersData: users,
        message: 'Successfully fetched users',
        result: true,
      });
    } else {
      res.status(404).json({
        usersData: [],
        message: 'User data empty',
        result: false,
      });
    }
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({
      message: 'Failed to fetch users',
      error: err.message,
      result: false,
    });
  }
};
module.exports = {
  userRegister,
  userLogin,
  getAllUsers,
};
