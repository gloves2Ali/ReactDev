/**
 * 后台node
 * nodemon 实时更新：nodemon server.js
 */
const express = require('express')
const mongoose = require('mongoose')
//新建app
const app = express()

//连接mongo 并且使用reactDev这个集合
const DB_URL = 'mongodb://localhost:27017/reactDev'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function(){
    console.log('mongo connect success')
})
// 类似于mysql的表 mongo里有文档、字段的概念
const User = mongoose.model('user',new mongoose.Schema({
    user:{type:String,require:true},
    age:{type:Number,require:true}
}))
// 新增数据
// User.create({
//     user:'steven',
//     age:29
// },function(err,doc){
//     if(!err){
//         console.log(doc)
//     }else{
//         console.log(err)
//     }
// })

//更新数据
// User.update({'user':'cdt'},{'$set':{age:26}},function(err,doc){
//     if(!err){
//         console.log(doc);
//     }
// })

// 删除数据
// User.remove({},function(err,doc){
//     console.log(doc);
// })


app.get('/',function(req,res){
    res.send('<h1>Hello world</h1>')
})
app.get('/data',function(req,res){
    // 查找数据:findOne - 查找一条数据
    User.findOne({user:'cdt'},function(err,doc){
        res.json(doc)
    })
})


app.listen(9093,function(){
    console.log('Node app start at port 9093')
})

