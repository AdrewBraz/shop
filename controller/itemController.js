import mongoose from 'mongoose';
import { parseQuery } from '../src/helpers';
import models from '../models/item';

exports.getItem = async  (req, reply) => {
  const id = parseQuery(req.params.id)
  const model = models[id];
  const coll = await model.find({})
  reply.send(coll)
};

exports.addItem = async (req, reply) => {
  try {
    const { body } = req;
    const item = new Item(body);
    return item.save();
  } catch (err) {
    throw new Error(err);
  }
};

exports.updateItem = async (req, reply) => {
  try {
    const { id } = req.params;
    const coll = await Item.findOneAndRemove(id);
    return coll;
  } catch (err) {
    throw new Error(err);
  }
};

exports.deleteItem = async (req, reply) => {
  try {
    const { id } = req.params;
    const coll = await Item.findOneAndRemove(id);
    return coll;
  } catch (err) {
    throw new Error(err);
  }
};
