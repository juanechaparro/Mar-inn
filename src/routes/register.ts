import { Request, Response } from 'express'
import { MarinnController } from '../controllers/mar-inn'
// import Register from '../models/register'



const RegisterRoutes = (app: any) => {
app.post('/register/create', async (req: Request, res: Response) => {
   // const bearerHeader = req.headers['authorization']
    
    MarinnController.createRegister(req.body)
        res.status(200).json(MarinnController.createdR)
    
      
    
    
  })

app.get('/register/get', (req: Request, res: Response) => {
    // const bearerHeader = req.headers['authorization']
    const filterCustomer = req.query.identificationNumber ||null;
     MarinnController.getRegisters(filterCustomer).then((registers)=>{
        res.status(200).json(registers)
    })
        
            // res.status(200).json(MarinnController.registersLists)

        
       
   })

   app.patch('/:id',(req: Request, res: Response) => {
    MarinnController.updateRegister(req.params.id, req.body.mobile)
     .then((data) => {
        res.status(200).json({data})
    })
       
   }
   )
   app.delete('/:id', (req, res)=>{
    MarinnController.deleteRegister(req.params.id)
        res.status(200).send(`Registro ${req.params.id} eliminado`) 
    
   })


}

export default RegisterRoutes