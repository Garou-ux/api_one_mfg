const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const PayRollSchema = Schema({
    employee_id : //usuario al que se le esta pagando
    {
      type : Schema.ObjectId,
      ref  : 'Employee'
    },
  overtime :
  {
    type     : Number,
    required : false
  },
  faults :
  {
    type : Number,
    required : false,
    default : 0
  },
  attendance_award :
  {
    type : Number,
    required : false,
    default  : 0
  },
  petty_cash :
  {
    type : Schema.Types.Decimal128,
    required : false,
    default : 0
  },
  outstanding_debts :
  {
    type : Schema.Types.Decimal128,
    required : false,
    default : 0
  },
  total :
  {
    type : Schema.Types.Decimal128,
    required : false,
    default : 0
  },
  total_card :
  {
    type : Schema.Types.Decimal128,
    required : false,
    default : 0
  },
  total_cash :
  {
    type : Schema.Types.Decimal128,
    required : false,
    default : 0
  },
  payroll_date :
  {
    type: Date, 
    default: Date.now 
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

module.exports = mongoose.model('PayRoll', PayRollSchema);