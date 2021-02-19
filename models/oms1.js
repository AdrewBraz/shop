// @ts-check
import mongoose from 'mongoose';

mongoose.set('debug', true);
const { Schema } = mongoose;

const oms1Schema = new Schema({
  SMO_NAME: String,
  PROFILE: String,
  MDSTAND: Number,
  USL: Number,
  TOTAL_PRICE: mongoose.Types.Decimal128,
  DATE: Date,
});

export default mongoose.model('OMS1', oms1Schema, 'oms1');
