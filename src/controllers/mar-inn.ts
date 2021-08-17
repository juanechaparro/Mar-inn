import Register from '../models/register'

let created  ;
let registersList;

export const MarinnController = {
    
    createRegister: async (data: any) => {
       {
        const createData = {
     
    customerName: data.customerName,
    customerLastName: data.customerLastName,
    mobile: data.mobile,   
    email: data.email,
    identificationNumber: data.identificationNumber,
    identificationType:data.identificationType,
    Ref: data.Ref,
    noRef :data.noRef,
    nightSetting:[data.nightSetting],
    payments: [data.payments],
    nightDays: [data.nightDays],
    services: data.services,
    createdAt: new Date().valueOf(),
        }
        await new Register(createData).save()
        created = createData
      }
      
      return created
    },
    createdR: created,
    getRegisters:  (filterCostumer) =>{

           /* let filter= {}
            if(filterCostumer){
                filter = {identificationNumber:filterCostumer};
            }
            const registers = await Register.find(filter)
             registersList= registers;
        */
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
    getRegistersById:  (filterCostumer) =>{

      
     return new Promise((resolve, reject)=> {
         let filter= {}
         if(filterCostumer){
             filter = {_id:filterCostumer};
         }
         const registers = Register.find(filter)
         .catch(e=>{
               reject(e)
         })
         resolve (registers);
      })
 },
    registersLists:registersList,
    updateRegister:async (id2, data: any)=>{

        await Register.findOneAndUpdate(
            {_id:id2},
            {   customerName: data.customerName,
                customerLastName: data.customerLastName,
                mobile: data.mobile,   
                email: data.email,
                identificationNumber: data.identificationNumber,
                identificationType:data.identificationType,
                Ref: data.Ref,
                noRef :data.noRef,
                nightSetting:[data.nightSetting],
                payments: [data.payments],
                nightDays: [data.nightDays],
                services: data.services}
        )
        // return new Promise(async(resolve, reject)=>{
        //     if (!id || !mobile) {
        //          reject('Invalid date');
        //          return false;
        //      }
        //    const result = async()=>{
        //     const foundRegister =await Register.findOne({
        //         _id : id
        //     });
        //     foundRegister.mobile =mobile;
        //    const newRegister = await foundRegister.save();
        //    return newRegister;
        //    }

          
        //    resolve(result)
        //  })
   },
   deleteRegister:async(id)=>{
    
        if(!id){
            return false
        }
            return  await Register.deleteOne({
                  _id:id
              })
          

        
    
    // return new Promise<void> ((resolve, reject) =>{
    //     if(!id){
    //         reject ('no id');
    //         return false;
    //     }
    //     const removeRegister = function (id){
    //         return  Register.deleteOne({
    //               _id:id
    //           })
    //       }
    //     removeRegister(id).then(()=>{
    //         resolve()
    //     })
    //     .catch(e =>{
    //         reject(e)
    //     })
        

        
    // })
   }

  }