const mongoose = require('mongoose');

const laptopSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            require: true
        },
        title: {
            type: String,
            require: true
        },
        summary: {
            type: String,
            require: true
        },
        imageurl: {
            type: String,
            require: true
        },
        price: {
            type: Number,
            require: true
        },
        number: {
            type: Number,
            require: true
        }
    }
);

module.exports = mongoose.model("Laptop", laptopSchema);