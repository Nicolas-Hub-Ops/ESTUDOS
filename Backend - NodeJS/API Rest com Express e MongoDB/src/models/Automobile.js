import mongoose from "mongoose";

const automobileSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
    },
    client: {
        type: ObjectId
    },
    manufacturer: {
        type: String,
        required: [true, "Manufacturer field is required"],
    },
    model: {
        type: String,
        required: [true, "Model car field is required"],
    },
    year: {
        type: Number,
        required: [true, "Year of the car is required"],
    },
    license: {
        type: String,
        required: [true, "License field is required"]
    },
    color: {
        type: String,
    }, 

});

const Automobile = mongoose.model('Automobiles', automobileSchema);

export default Automobile;