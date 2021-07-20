import Register from '../models/register'

export const MarinnController = {
    createRegister: async (data: any) => {
       {
        const createData = {
     
    customerName: data.customerName,
    customerLastName: data.customerLastName,
    mobile: data.mobile,
    identificationNumber: data.identificationNumber,
    nightSetting: {
        adults: data.adults,
        kids: data.kids,
        price: data.price,
    },
    payments: [data.payments],
    nightDays: [data.nightDays],
    services: [data.services],
    createdAt: new Date().valueOf(),
        }
        await new Register(createData).save()
      }
      return true
    },
    getRegisters:(filterCostumer) =>{
        return new Promise((resolve, reject)=> {
            let filter= {}
            if(filterCostumer){
                filter = {identificationNumber:filterCostumer};
            }
            const registers = Register.find(filter)
            .catch(e=>{
                 reject(e)
            })
            resolve (registers);
        })
    },
    updateRegister:(id, nightSetting)=>{
        return new Promise(async(resolve, reject)=>{
            if (!id || !nightSetting) {
                 reject('Invalid date');
                 return false;
             }
           const result = async()=>{
            const foundRegister =await Register.findOne({
                _id : id
            });
            foundRegister.nightSetting =nightSetting;
           const newRegister = await foundRegister.save();
           return newRegister;
           }

          
           resolve(result())
         })
   },
   deleteRegister:(id)=>{
    return new Promise<void> ((resolve, reject) =>{
        if(!id){
            reject ('invalid id');
            return false;
        }
        const removeRegister = function (id){
            return  Register.deleteOne({
                  _id:id
              })
          }
        removeRegister(id)
        .then(()=>{
            resolve()
        })
        .catch(e =>{
            reject(e)
        })
        

        
    })
   }

  }