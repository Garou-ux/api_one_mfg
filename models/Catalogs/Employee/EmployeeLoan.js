const mongoose = require('mongoose');
const Schema   = mongoose.Schema();

const EmployeesLoansSchema = Schema({
  employee_id : 
  {
    type : Schema.ObjectId,
    ref  : 'Employee'
  },
    total :
    {
      type : Schema.Types.Decimal128,
      required : false,
      default : 0
    },
    loan_end_date :
    {
        type: Date
    },
    status_id :
    {
      type : Schema.ObjectId,
      ref : 'Status'
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

module.exports = mongoose.model('EmployeeLoan', EmployeesLoansSchema);