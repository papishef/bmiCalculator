//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));



// Index page, Calculator page

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});



app.post("/", function(req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;

  res.send("The result of the calculation is " + result);
});


// bmiCalculator page

app.get("/bmiCalculator.html", function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});


app.post("/bmiCalculator.html", function(req, res) {


    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

      var bmi = weight/(Math.pow(height, 2));
      // bmi = Math.round (bmi);

      if(bmi < 18.5) {
        res.send("Your BMI is " + bmi + " so you are underweight");
      }

      if(bmi >= 18.5 && bmi < 25) {
          res.send("Your BMI is " + bmi + " so you have normal weight");
      }

          if(bmi >= 25) {
          res.send("Your BMI is " + bmi + " so you are overweight");
      }


});


app.listen(3000, function() {
  console.log("Server Listening on port 3000");
});
