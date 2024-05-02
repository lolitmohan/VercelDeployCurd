const express=require('express');
const Controller=require('../controller/TaskController')


const router=express.Router();

router.post("/create",Controller.CreateTask);
router.get('/readTask',Controller.ReadTask);
router.post('/updateTask/:id',Controller.UpdateTask);
router.post('/deleteTask/:id',Controller.DeleteTask);




module.exports=router;