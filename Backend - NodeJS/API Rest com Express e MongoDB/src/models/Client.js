import mongoose from "mongoose"

const clientSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
    },
    name: {
        type: String,
        required: [true, 'Name field is required'],
    },
    email: {
        type: String,
        required: [true, 'Email field is required'],
        unique: true,
    },
    telephone: {
        type: Number,
        required: [true, 'Telephone field is required'],
    },
});

const Client = mongoose.model('Clients', clientSchema);

export default Client;