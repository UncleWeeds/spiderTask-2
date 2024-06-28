const User = require('../models/authService');
const jwt = require("jsonwebtoken")
const DEFAULT_EXPIRATION = 3600

const { createClient } = require('redis');

const redisClient = createClient({ url: 'redis://redis:6379' });

async function viewUsers(req, res) {

  redisClient.connect();
  const name = req.body.name;

  redisClient.on("connect", () => {
    console.log("Connected to Redis");
  });

  const value = await redisClient.get(name);
  if (value !== null) {
    const parsedValue = JSON.parse(value);
    return res.json(parsedValue);
  }
  else (value == null);
  User.findOne({ name })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      redisClient.setEx(name, DEFAULT_EXPIRATION, JSON.stringify(user));
      return res.json(user);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}




  


    

async function createUsers(req, res) {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
        return res.json({ message: "User already exists" });
    } else {
        const newUser = new User({
            name,
            email,
            password,
        });
        newUser.save();
        return res.json(newUser);
    }
}

const userLogin = async (req, res) => {
    const {email, password} = req.body

    const user = await User.findOne({ email });
    if (!user) {
        return res.json({ message: "User doesn't exist"})
    } else {

        if (password !== user.password) {
            return res.json({ message: "Password Incorrect" });
        }
        const payload= {
            email,
            name: user.name
        };
        jwt.sign(payload, "secret", (err, token) => {
            if(err) console.log(err);
            else {
                return res.json({ token: token })
            }
        });
    }
};



const deleteUsers = (req, res) => {
    const { name , email } = req.body;

    User.findOneAndDelete({ name, email })
    .then((deletedUser) => {

      if (!deletedUser) {
        return res.status(404).json({ message: 'User not found do something you idiot' });
      }

      return res.status(204).json({ message: 'User has been removed you sico'} );
        })
};

module.exports = {
    createUsers, userLogin, viewUsers, deleteUsers
   }

