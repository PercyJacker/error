import express from "express";
import add from "../controller/student.contoller.js"
import toDoList from "../model/todo.model.js";


const router = express.Router();


router.post("/student",add)
router.get("/student",(req ,res)=>{
    toDoList.find()
    .then(result=>res.json(result))
    .catch(err =>console.log(err))
})

router.put("/update/:_id",async (req, res )=>{
    const _id=req.params
    console.log(_id);
    console.log("itna tk ho gya",_id);
   
    })



export default router