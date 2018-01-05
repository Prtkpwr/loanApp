//including mongoose
var mongoose = require('mongoose');
//declaring a schema

var Schema = mongoose.Schema;

//appSchema is an instance of schema

var appSchema = new Schema ({

	loan_amount : {type:String, required:true},
	loan_tenure : {type:String, required:true},
	per_month_interest : {type: String, required:true}

},{timestamp:true});

//connect model to schema
mongoose.model('sampleApp',appSchema);