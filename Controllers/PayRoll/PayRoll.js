const PayRoll = require('../../models/PayRoll/PayRoll');



const PayRollController = {
   
    ListActivePayRoll : async function (req, res){ 
        try{ 
            let _filter = {active : 1};
            const ActivePayRolls = await PayRoll.findOne({active : _filter.active});
            let response = {
                message : 'success',
                data    : ActivePayRolls
            };
            return res.status(200).json(response);    
        }catch(err){
           return res.status(400).json({
             status  : 'error',
             message : `Error in ${err}`
           });
        }
    },

    GetPayRoll: async function (req, res){
        try {
              let _filter = {active :1, _id : req.id};
              const PayRoll = await PayRoll.findOne({active : _filter});
              let response = {
                message : 'success',
                data    : PayRoll
              };
              return res.status(200).json(response);
        }catch (err) {
            return res.status(400).json({
                status  : 'error',
                message : `Error in ${err}`
            });
        }
    },

    StorePayRoll: async function (req, res) {
          try {
             const {
                     employee_id, overtime, faults, attendance_award, petty_cash
                    ,outstanding_debts, total, total_card, total_cash, payroll_date, statud_id
                    ,created_by, active
                   } = req.body;

             const _payroll = PayRoll.create({
                employee_id,
                overtime,
                faults,
                attendance_award,
                petty_cash,
                outstanding_debts,
                total, 
                total_card, 
                total_cash,
                payroll_date,
                created_by,
                active
             });
            
            const is_saved = await _payroll;
            
            if(!is_saved)
             return res.status(400).json({
                message : 'warning',
                test    : 'something failed, try again'
             });

            return res.status(201).json({
                message : 'success',
                text    : 'Process Completed',
                payroll : _payroll
            });

          } catch (error) {
            
          }
    }

}

module.exports = PayRollController;