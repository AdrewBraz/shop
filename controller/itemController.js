import Item from '../models/item';

exports.getItem = async (id) => {
  try {
    const coll = await Item.find({})
    console.log(coll)
  }catch(e){
    console.log(e)
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
