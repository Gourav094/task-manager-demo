const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    data: {
        type: String,
        required: true,
    },
    done: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model("Task", TaskSchema);
