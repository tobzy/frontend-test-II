/**
 * Created by Tobechukwu.Onuegbu on 6/10/2017.
 */
var express = require("express");
var path= require("path");

var app = express();

app.use(express.static(path.join(__dirname, '/')));
app.use('*', express.static(path.join(__dirname, '/')));


app.get('*',function(req, res) {
  res.sendFile('index.html');
})


app.listen(process.env.PORT || 9000, function () {
  console.log('Server running on port 9000')
});