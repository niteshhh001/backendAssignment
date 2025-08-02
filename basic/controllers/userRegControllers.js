const bcrypt = require('bcrypt');
const users = require('../models/userModel');

const requestUser=(req,res)=>{
    const {name, email, password} = req.body;
    const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return res.status(400).json({ error: 'Email already in use' });
  }

  const hashedPassword = bcrypt.hashSync(password, 10);

  const newUser={
    id: users.length + 1,
    name,
    email,
    password: hashedPassword
  };
  users.push(newUser);

  res.status(201).json({
    message: 'User registered successfully',
    user:{
        id: newUser.id,
        name: newUser.name,
        email: newUser.email
    }
  });

}

module.exports={requestUser};