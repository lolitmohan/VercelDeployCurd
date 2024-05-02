const TaskModel = require("../model/TaskModel")

exports.CreateTask=async(req,res)=>{
    try{
        let reqBody=req.body;
        let data= await TaskModel.create(reqBody);
        return res.status(200).json({status:"success",message:data});
    }catch (e) {
        return res.status(200).json({err:e.toString()})
    }
}

exports.ReadTask=async(req,res)=>{
    try{
        let data= await TaskModel.find();
        return res.status(200).json({status:"success",data:data});
    }catch (e) {
        return res.status(200).json({err:e.toString()})
    }
}

exports.UpdateTask=async(req,res)=>{
    try{
        let {id}=req.params;
        let reqBody=req.body;
        let data=await TaskModel.updateOne({_id:id},reqBody);
        return res.status(200).json({status:"success",data:data});
    }catch (e) {
        return res.status(200).json({err:e.toString()})
    }
}

exports.DeleteTask=async(req,res)=>{
    try{
        let {id}=req.params;
        let data= TaskModel.deleteOne({_id:id});
        return res.status(200).json({status:"success",data:data});
    }catch (e) {
        return res.status(200).json({err:e.toString()})
    }
}



