const express= require ('express')
const router = express.router()
const contacts= require ('../ models/ContactModel')


router.get('/all',async(req,res)=>{
    try{
        const contacts =await contacts.find()
        return res.status(200).json(contacs)
    } catch(error){
        return res.satus(500).json
    }
    
}