const express = require("express");
const app = express();
app.use(express.json());
const names= ["Ammar","Hamza","Khizer"];

app.get('/', function (req, res) {
  res.send('Hello World')
});
app.get("/api/names", function (req, res) {
    res.send(names);
  });
 app.get("/api/names/:index", function (req, res) {
    if (!names[req.params.index])
      return res.status(400).send("Product not found");
    res.send(names[req.params.index]);
  });
  app.put("/api/names/:index", function (req, res) {
    names[req.params.index] = req.body.name;
    res.send(names[req.params.index]);
  });
  app.delete("/api/names/:index", function (req, res) {
    names.splice(req.params.index, 1);
    res.send(names);
  });
app.delete("/api/names",function(req,res){
    names.push(req.params.name);
    res.send(names);
});
app.listen(3000);