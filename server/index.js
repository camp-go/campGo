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
  let id=req.params._id
  console.log(id);
  console.log(obj);
  Item.findByIdAndRemove({_id: id}, (err,result)=>{
    if(err){
      console.log(err);
    } else {
      console.log(result);
    }
  })
})

app.put('/updateItems/:id', function (req, res){
  let _id= req.params._id
  let obj= req.body
  console.log(obj);
  console.log(_id);
  Item.findByIdAndUpdate({_id}, obj, (err, result)=>{
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