const moongoose = require("mongoose")
const Schema = moongoose.Schema;

const TimesSchema = new Schema({
   
    user: { 
        type: mongoose.Schema.Types.ObjectId, ref: "users" 
    },
    Client: {
        type: mongoose.Schema.Types.ObjectId, ref: "clients"
    },
    Matter:{
        type: mongoose.Schema.Types.ObjectId, ref: "matters"
    },
    Activity:{
        type:String,
        required: true
    },
    time: {
        type: Boolean,
        default: true
    }


},{});

mongoose.Types.ObjectId.prototype.valueOf = function () {
    return this.toString();
};

module.exports = mongoose.model("times", TimesSchema);


