//Connect to MongoDB using Mongoose
import mongoose from 'mongoose';

// Replace this with your MONGOURI.
const MONGO_URI = 'mongodb+srv://ayushi:Ayu1208@cluster0.76n2uvg.mongodb.net/';

const connect = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB', error);
    }
};

export { connect };

