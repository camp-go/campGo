var express = require("express");
var bodyParser = require("body-parser");
var db = require("./database-mongo/index.js");
const{Item,Booking,selectAll} = require("./database-mongo/Item.model.js")

var app = express();
app.use(express.json());
app.use(express.static(__dirname + "/../client/public"));
app.use(express.urlencoded({ extended: false}))

app.get("/items", function (req, res) {
  selectAll(function (err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.post("/items", (req,res)=>{
  console.log(req.body)
Item.create(req.body)
    .then(function(){
      selectAll(function (err,data){
        if(err){
          // res.sendStatus(500)
        } else {
          res.json(data)
        }
      })})
      .catch(err=>console.log('you have an error', err))
})

app.post("/campsites", (req,res)=>{
  console.log(req.body)
Booking.create(req.body)
    .then(function(){
      selectAll(function (err,data){
        if(err){
          // res.sendStatus(500)
        } else {
          res.json(data)
        }
      })})
      .catch(err=>console.log('you have an error', err))
})


app.post("/books", (req,res)=>{
  console.log(req.body)
Booking.create(req.body)
    .then(function(){
      selectAll(function (err,data){
        if(err){
          // res.sendStatus(500)
        } else {
          res.json(data)
        }
      })})
      .catch(err=>console.log('you have an error', err))
})

app.delete('/removeItems/:id', function(req,res){
  let id=req.params.id
  console.log(id);
  Item.findByIdAndRemove({_id: id}, (err,result)=>{
    if(err){
      console.log(err);
    } else {
      res.send("deleted");
    }
  })
})

app.put('/updateItems/:id', function (req, res){
  let id= req.params.id
  let body= req.body
  console.log(body);
  console.log('yoyo', req.params._id);
  
  Item.findByIdAndUpdate(id, body, (err, result)=>{
      if(err){
        console.log(err);
      } else {
        res.send(result)
      }
    })
})

app.listen(3000, function () {
  console.log("listening on port 3000!");
});