import Item from '../models/item';

exports.getItem = async (req, reply) => {
  try {
    const { id } = req.params;
    const coll = await Item.find(id);
    return coll;
  } catch (err) {
    throw new Error(err);
  }
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
