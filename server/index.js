var express = require("express");
var bodyParser = require("body-parser");
var db = require("./database-mongo/index.js");
const{Item,selectAll} = require("./database-mongo/Item.model.js")

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

app.listen(3000, function () {
  console.log("listening on port 3000!");
});