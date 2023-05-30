const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const EmployeeCompensationsSchema = Schema({
    employee_id : //usuario al que se le esta pagando
    {
      type : Schema.ObjectId,
      ref  : 'Employee'
    },
    payroll_id :
    {
       type : Schema.ObjectId,
       ref  : 'PayRoll'
    },
    total :
    {
      type : Schema.Types.Decimal128,
      required : false,
      default : 0
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

module.exports = mongoose.model('EmployeeCompensation', EmployeeCompensationsSchema);