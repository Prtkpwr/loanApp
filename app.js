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

//for CORS browser support
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


//GET to first page
app.get('/',function(req,res,next){
	res.send("Welcome to loan API!")
});

//GET all data

app.get('/loans',function(req,res,next){

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
app.post('/loan/bulk_creation',function(req,res,next){

	var newData = new appModel({

	loan_amount : req.body.loan_amount,
	loan_tenure : req.body.loan_tenure,
	per_month_interest : req.body.per_month_interest
	});
    
    var repayment_profile = {
        payment : req.body.payment,
        total : req.body.total,
        totalinterest : req.body.totalinterest
        
    };
    newData.repayment_profile = repayment_profile;
    
	newData.save(function(err,result){
		if(err){
			res.send(err);
		}
		else{
			res.send(result);
		}
	});
});
//to display loan by ID
app.get('/loan/:id', function (req, res,next) {
    appModel.findOne({
        '_id': req.params.id
    }, function (err, result) {
        if (err) {
            console.log("some Error");
            res.send(err);
        } else {
            res.send(result);
        }
    }); //end user model find
}); // end route to get a particular loan entry

app.put('/loan/edit/:Id', function(req, res,next) {

    var update = req.body;

    //Find one loan entry and update it.

    appModel.findOneAndUpdate({
        "_id": req.params.Id
    }, update, function(err, result) {

        if (err) {
            res.send(err);
        } else {
            console.log(result);
            res.send(result);
        }

    }); // findOneAndUpdate ends

}); //PUT request ends

// POST request to Delete a loan entry

app.post('/loan/delete/:Id', function(req, res) {



    appModel.remove({
        _id: req.params.Id
    }, function(err, result) {


        if (err) {
            res.send(err);
        } else {
            res.json({
                Info: "Loan Entry Deleted! "
            });
        }

    }); //  remove blog ends

}); //POST request  end

app.listen(3000,function(){
	console.log("Example app listening on port 3000!")
});