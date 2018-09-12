var express = require('express');
var app = express();
app.get("/", (req, res) => res.send("hello world"));

app.post('/login', (req, res) => res.send("test login action"));

app.get('/user/:username/book/:bookid', (req, res) =>{
  res.send(req.params);
})

app.get('/next', (req, res, next) => {
  console.log("1");
  next()
}, (req, res) => {
  res.send("2");
});
//set view folder
app.set('views', './views');
//set view engine
app.set('view engine', 'ejs');

app.get('/ejs', (req, res) => {
  var students = [
    {
      name: 'KhoaNT',
      age:30
    },
    {
      name: 'TrangDt',
      age:29
    },
    {
      name: 'VyNK',
      age:1
    },
  ]
  res.render('index',{
    students:students
  });
})



app.listen(4000);
