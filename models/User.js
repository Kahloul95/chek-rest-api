const mongoose=require("mongoose");
const {Schema}=mongoose;

const userSchema= new Schema({
    name:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type:Number
    }

});
module.exports=mongoose.model("User",userSchema);
