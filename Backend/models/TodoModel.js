const mongoose=require("mongoose")


const todoShema= new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
},
 {
    timestamps: true
 }
)



module.exports= mongoose.model("Todo",todoShema)