import mongoose from 'mongoose';
mongoose.set('debug', true)
const { Schema } = mongoose;

const ItemSchema = new Schema({
  name: String,
  image: String,
  desc: String,
  price: Number,
  status: String,
});

const models = {
  'meat': mongoose.model('Meat', ItemSchema, 'meat'),
  'beer': mongoose.model('Beer', ItemSchema, 'beer'),
  'fish': mongoose.model('Fish', ItemSchema, 'fish')
}
export default models;