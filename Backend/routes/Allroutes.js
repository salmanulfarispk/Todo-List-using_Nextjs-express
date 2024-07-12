const express=require("express")
const { AddTodo,getTodos,DeleteTodo, EditTodo } = require("../controller/TodoController")
const router=express.Router()




router.post("/addtodo",AddTodo)
router.post("/getTodo",getTodos)
router.delete("/deleteTodo/:id",DeleteTodo)
router.patch("/editTodo/:id",EditTodo)








module.exports= router