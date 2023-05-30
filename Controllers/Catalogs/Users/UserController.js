
const User = require('../../../Models/Catalogs/Users/User');
const validator  =  require('validate-form-p');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const rules = [
  ["name", "require", "The name is empty"],
  ["name", "xiaoming", "My name is xiaoming", 0, "equal"],
  [
    "number",
    "2",
    "The value can't be 2.",
    0,
    (value, secondIndexValue) => {
      return value !== secondIndexValue;
    }
  ]
];



const data = {
  phone: ''
}
const formData = {
  name: "xiaoming",
  number: "2"
};

//class user_controller con sus metodos
const user_controller = {
    
    repuestas: function(res,codigo_error, message){
          return res.status(codigo_error).json(message);
    },

    list_users: async function(req, res){      
        let _filter = {active : 1};
        const ActiveUsers = await User.findOne({active : _filter.active});
        let response = {
          message: 'success',
          data : ActiveUsers
        };
        // return user_controller.repuestas(res,200,ActiveUsers) 
        return res.status(200).json(response);
    },

    store: async function(req, res){
         try {
                // Get user input
                const { name, email, password, active, role_id } = req.body;

                // Validate user input
                if (!(email && password)) {
                  res.status(400).send("All input is required");
                }

                // check if user already exist
                // Validate if user exist in our database
                const oldUser = await User.findOne({ email });

                if (oldUser) {
                  // return res.status(409).send("User Already Exist. Please Login");
                  return user_controller.repuestas(res,409,{status: 'warning', code: 409, message: `User Already Exists`});
                }

                //Encrypt user password
                encryptedPassword = await bcrypt.hash(password, 10);

                // Create user in our database
                const user = await User.create({
                  name,
                  active,
                  role_id,
                  email: email.toLowerCase(), // sanitize: convert email to lowercase
                  password: encryptedPassword,
                });

                // Create token
                const token = jwt.sign(
                  { user_id: user._id, email },
                  process.env.TOKEN_KEY,
                  {
                    expiresIn: "2h",
                  }
                );
                // save user token
                user.token = token;

                // return new user
                res.status(201).json(user);
            } catch (err) {
                 console.log(err);
            }
   },

    AuthenticateUser: async function (req, res) {
        try {
          const { email, password } = req.body;
          // Validate user input
          if (!(email && password)) {
            res.status(400).send("All input is required");
          }
          // Validate if user exist in our database
          const user = await User.findOne({ email });
      
          if (user && (await bcrypt.compare(password, user.password))) {
            // Create token
            const token = jwt.sign(
              { user_id: user._id, email },
              process.env.TOKEN_KEY,
              {
                expiresIn: "2h",
              }
            );
      
            // save user token
            user.token = token;
      
            // user
            res.status(200).json(user);
          }
          res.status(400).send("Invalid Credentials");
        } catch (err) {
          console.log(err);
        }
     },

    UpdateUser: async function (req, res) {
        try {
          const {_id, name, role_id } = req.body;
          let _params = {
            name : name,
            role_id :role_id
          };
          let _is_update = await User.findByIdAndUpdate({_id: _id }, _params);
          res.status(200).json(_is_update); 
        } catch (error) {
          res.status(400).json(error);
        }
    },
};

module.exports = user_controller;