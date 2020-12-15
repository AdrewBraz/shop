import mongoose from 'mongoose';

mongoose.set('debug', true);
const { Schema } = mongoose;

const ItemSchema = new Schema({
  COD: String,
  NAME: String,
  PRICE: String,
  PRICE_D: String,
  USL: Number,
  DAYS: Number,
  NUM_DV: Number,
  NUM_DOC: Number,
  NUM_CI: Number,
  TOTAL_PRICE: String,
  DATE: Date,
});

export default mongoose.model('OMS2', ItemSchema, 'oms2');
