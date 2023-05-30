
const mongoose =  require('mongoose');
const Schema   = mongoose.Schema;

const UserSchema =  Schema({
    name : 
    {
      type     : String,
      required : true
    },
    email :
    {
      type     : String,
      required : true,
      unique   : true
    },
    password :
    {
      type     :String,
      required : true
    },
    active :
    {
     type : Number,
     required : false
    },
    role_id :
    {
      type : String, 
     // ref : 'Role'
    },
    token: {
      type : String
    }

},
{
    timestamps : true
});

module.exports = mongoose.model('User', UserSchema);