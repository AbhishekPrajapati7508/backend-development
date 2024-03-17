import mongoose from "mongoose";


const  todoSchema = new Schema({
    content:{
        type:String, required:true
    },
    compete:{
        type:Boolean,default:false
    },
    createBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    subTodos:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"SubTodo"
        }]
}
,{timestamps: true}
);

export const todo = mongoose.model("Todo", todoSchema);