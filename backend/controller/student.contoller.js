import toDoList from "../model/todo.model.js";


//to add new tasks 
const add =async(req ,res)=>{
    try {
        const newTasks = new toDoList({
            task: req.body.task
        })
        console.log(newTasks);
        res.json(newTasks)

        const saveTask =await newTasks.save();
        console.log("saved task");
    } catch (error) {
        console.log(error);
    }

}




export default add