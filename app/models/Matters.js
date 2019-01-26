const moongoose = require("mongoose")
const Schema = moongoose.Schema;

const MatterSchema = new Schema({
   
    name: {
        type:String,
        required: true 
    },
    Client: {
        type: mongoose.Schema.Types.ObjectId, ref: "clients"
    },
    assigned_user:{
        type: mongoose.Schema.Types.ObjectId, ref: "users"
    },
    description:{
        type:String,
    },
    area:{
        enum: ["Administrativo", "Litigio","Consultoria"]
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


