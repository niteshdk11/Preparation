import mongoose from "mongoose";

// Define the schema
const postsSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, // Reference to the user document
        ref: "user" // This is the name of the model being referenced
    },
    content: {
        type: String, // The content of the post
        required: true // Optional: enforce that content must be provided
    },
    date: {
        type: Date,
        default: Date.now // Automatically set to current date if not provided
    }
});

// Create and export the model
export const postsModel = mongoose.model("post", postsSchema);
