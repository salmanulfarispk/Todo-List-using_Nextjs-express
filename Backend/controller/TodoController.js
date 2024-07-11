const TodoModel = require("../models/TodoModel");






module.exports={


 getTodos:async(req,res)=>{
       const {email}= req.body;
       
       const todos= await TodoModel.find({email})

       return res.status(200).json({
        success: true,
         todos:todos
       });
       
 },



  AddTodo: async(req,res)=>{
      const {email,text}=req.body;

      const saveTodo= await TodoModel.create({
        email:email,
        text: text
      })

      await saveTodo.save()

      return res.status(201).json({
        message:"creating new todo succesfull",
        todo:saveTodo,
        success: true
      })


  },

  DeleteTodo: async(req,res)=>{

    const {id}=req.params;

    await TodoModel.findByIdAndDelete({_id:id})

    return res.status(200).json({
        message:"Todo deleted succesfully",
        success: true
    })
  }







}