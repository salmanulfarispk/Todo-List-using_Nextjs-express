const express=require("express")
const { AddTodo,getTodos,DeleteTodo } = require("../controller/TodoController")
const router=express.Router()




router.post("/addtodo",AddTodo)
router.post("/getTodo",getTodos)
router.delete("/deleteTodo/:id",DeleteTodo)









module.exports= router