const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const EmployeeImageSchema = Schema({
    employee_id : //usuario al que se le esta pagando
    {
      type : Schema.ObjectId,
      ref  : 'Employee'
    },
    path :
    {
      type : String,
      required : true
    },
    image_name :
    {
      type : String,
      required : true
    },
    image_type :
    {
      type : String,
      required : true
    },
    qr_code :
    {
      type : String,
      required : false
    },
    codebar_code : 
    {
      type : String,
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

module.exports = mongoose.model('EmployeeImage', EmployeeImageSchema);
