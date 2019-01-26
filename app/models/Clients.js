const moongoose = require("mongoose")
const Schema = moongoose.Schema;

const ClientSchema = new Schema({
   
    name: {
        type:String,
        required: true 
    },
    principal_contact: {
        type:String,
        required: true
    },
    principal_mail:{
        type:String,
        required: true
    },
    rfc:{
        type:String,
        required: true
    },
    notes:{
        type:String
    },
    is_active: {
        type: Boolean,
        default: true
    }

},{});

mongoose.Types.ObjectId.prototype.valueOf = function () {
    return this.toString();
};

module.exports = mongoose.model("clients", ClientSchema);

