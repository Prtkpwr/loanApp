var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
app.use(bodyParser.json({limit:'10mb',extended:true}));
app.use(bodyParser.urlencoded({limit:'10mb',extended:true}));

//database
var databasePath = "mongodb://localhost/loanDB";
db = mongoose.connect(databasePath);

mongoose.connection.once('open',function(){

	console.log("Success! Database is now connected!");
});

//model file
var sampleApp = require('./models/appModel.js');

var appModel = mongoose.model('sampleApp');

//GET to first page
app.get('/',function(req,res){
	res.send("Welcome to loan API!")
});

//GET all data
app.get('/loans',function(req,res){

	appModel.find(function(err,result){
		if(err){
			res.send(err);
		}
		else{
			res.send(result);
		}
	});
});

//POST data to loan database
app.post('/loan/bulk_creation',function(req,res){

	var newData = new appModel({

	loan_amount : req.body.loan_amount,
	loan_tenure : req.body.loan_tenure,
	per_month_interest : req.body.per_month_interest
	});

	newData.save(function(err,result){
		if(err){
			res.send(err);
		}
		else{
			res.send(result);
		}
	});
});


app.listen(3000,function(){
	console.log("Example app listening on port 3000!")
});