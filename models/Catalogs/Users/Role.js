const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const RolesSchema = Schema({
  name :
  {
    type     : String,
    required : true
  },
  description :
  {
    type     : String,
    required : false
  },
  created_by :
  {
    type : Schema.ObjectId,
    ref : 'User'
  },
  active :
  {
    type : Number,
    default : 1
  }
},
{
    timestamps : true
});

module.exports = mongoose.model('Role', RolesSchema);