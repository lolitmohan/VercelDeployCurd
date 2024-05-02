const mongoose=require('mongoose');
const DataSchema=mongoose.Schema({
        fName:{type:String,required:true},
        fCode:{type:String,required:true},
        fImage:{type:String,required:true},
        fCategory:{type:String,required:true},
        fQty:{type:Number,required:true},
        fPrice:{type:Number,required:true}

},{timestamps:true,versionKey:false})
const TaskModel=mongoose.model('tasks',DataSchema);
module.exports=TaskModel;