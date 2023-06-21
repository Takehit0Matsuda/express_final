const mongoose = require("mongoose");

const schema = mongoose.Schema({
    date : {
        type : Date,
        required : true,
    },
    title : {
        type : String,
        required : true,
        trim : true, //delete blank
    },
    comment : {
        type : String,
        required : true,
    },
    rate : {
        type : Number,
    },
    reviewer_name : {
        type: String,
        ref: "User_model"
    },
    reviewer_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User_model"
    }       
});

// "title": "TEST POST",
// "content": {
//     "date": "2023-4-05",
//     "comment": "TEST COMMENT",
//     "status": 2
// } 

module.exports = mongoose.model("Post_model", schema);