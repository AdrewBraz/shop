import mongoose from 'mongoose';

const { Schema } = mongoose;

const ItemSchema = new Schema({
  name: String,
  image: String,
  desc: String,
  price: Number,
  status: String,
});

export default mongoose.model('beer', ItemSchema);