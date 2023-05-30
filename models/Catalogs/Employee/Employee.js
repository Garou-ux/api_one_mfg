const mongoose =  require('mongoose');
const Schema   = mongoose.Schema;

const EmployeesSchema =  Schema({
    name : 
    {
      type     : String,
      required : true
    },
    last_name :
    {
        type     : String,
        required : false
    },
    active :
    {
     type : Number,
     required : false
    },

},
{
    timestamps : true
});

module.exports = mongoose.model('Employee', EmployeesSchema);