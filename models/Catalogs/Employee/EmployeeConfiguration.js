const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const EmployeeConfigurationSchema = Schema({
    employee_id : 
    {
      type : Schema.ObjectId,
      ref  : 'Employee'
    },
    imss_number :
    {
      type : String,
      required : false
    },
    overtime_cost :
    {
      type : Schema.Types.Decimal128,
      required : false,
      default : 0
    },
    fingerprint_checker_code :
    {
      type : String,
      required : false
    },
    overtime_cost :
    {
      type : Schema.Types.Decimal128,
      required : false,
      default : 0
    },
    punctuality_bonus :
    {
        type : Schema.Types.Decimal128,
        required : false,
        default : 0
    },
    card_percentage :
    {
        type     : Number,
        required : false
    },
    cash_percentage :
    {
        type     : Number,
        required : false
    },
    position_id :
    {
      type : Schema.ObjectId, 
      ref : 'Position'
    },
    active :
    {
      type : Number,
      default : 1
    },
    created_by :
    {
      type : Schema.ObjectId,
      ref : 'User'
    },
},
{
    timestapms : true
});

module.exports = mongoose.model('EmployeeConfiguration', EmployeeConfigurationSchema);