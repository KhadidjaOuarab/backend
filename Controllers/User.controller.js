const UserModel = require("../Models/User.model.js");
const userController = {};
const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken.js");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();
const SECRET = process.env.JWT_SECRET;

userController.authUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  console.log("%%%%%%%%%%%%%%%%%%%");
  console.log(req.body);
  console.log("%%%%%%%%%%%%%%%");
  // users = await UserModel.find();
  // console.log(users);
  const user = await UserModel.findOne({ username });
  console.log(user);

  if (user && (await user.matchPassword(password)))  {
    res.json({
      _id: user._id,
      username: user.username,
      token: generateToken(user._id),
    });
    
  } else {
    res.status(500).json({
      error: new Error("Invalid Email or Password"),
    });
    throw new Error("Invalid Email or Password");
  }
});


userController.getAllUsers = async function (req, res) {
  console.log("GET /getAllUsers");
  let users;
  try {
    console.log("inside try GET /getAllUsers");
    users = await UserModel.find();
    console.log(users);
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
};

userController.createUser = async function (req, res) {
  console.log("createUser");
  console.log(req.body);

  const { username, password } = req.body;
  const user = new UserModel({ username, password });

  try {
    await user.save();

    res.status(201).json({
      message: "user created successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error occured while creating exercice",
      error: error,
    });
  }
};
/*
// signup controller using jwt
//  signup ? create new user / register
userController.signup = (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  UserModel.findOne({ username })
    .then((user) => {
      if (user) {
        return res.status(400).json({
          message: "User already exists",
        });
      }
      const newUser = new UserModel({
        username,
        password,
      });
      // hash password
      console.log(newUser);
      bcrypt.genSalt(10, (err, salt) => {
        //let hash = bcrypt.
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw console.log(err);

          newUser.password = hash;
          newUser.save();
          return res.status(200).json({
            message: "User created successfully",
            user: newUser,
            token: jwt.sign(
              {
                username: newUser.username,
                userId: newUser._id,
              },
              SECRET,
              { expiresIn: "1h" }
            ),
          });
        });
      });
      // newUser.save()
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};

// login controller using jwt
userController.login = (req, res) => {
  const { username, password } = req.body;
  console.log("//////////////////////");
  console.log(req.body);
  console.log("//////////////////////");

  UserModel.findOne({ username })
    .then((user) => {
      if (!user) {
        console.log(user);
        return res.status(400).json({
          message: "User not found",
        });
      }

      bcrypt.compare(password, user.password).then((isMatch) => {
        if (!isMatch) {
          return res.status(400).json({
            message: "Invalid credentials",
          });
        }
        jwt.sign(
          { id: user._id },
          process.env.JWT_SECRET,
          { expiresIn: 3600 },
          (err, token) => {
            if (err) throw err;
            res.json({
              success: true,
              token: `Bearer ${token}`,
            });
          }
        );
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};

///////////////////////////////////////////////////////////////////////

//@description     Register new user
//@route           POST /api/users/
//@access          Public
userController.registerUser = asyncHandler(async (req, res) => {
  const { name, username, password, pic } = req.body;

  const userExists = await UserModel.findOne({ username });

  if (userExists) {
    res.status(404);
    throw new Error("User already exists");
  }

  const user = await UserModel.create({
    name,
    username,
    password,
    pic,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      username: user.username,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});
//////////////////////////////////////////
*/
module.exports = userController;
