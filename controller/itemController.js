import mongoose from 'mongoose';
import model from '../models/item';

exports.getData = async (req, reply) => {
  const { from, to } = req.body;
  const coll = await model.aggregate([
    {
      $match: {
        DATE: {
          $gte: new Date(from),
          $lte: new Date(to),
        },
      },
    }, {
      $group: {
        _id: {
          COD: '$COD',
          NAME: '$NAME',
        },
        USL: {
          $sum: '$USL',
        },
        TOTAL_PRICE: {
          $sum: '$TOTAL_PRICE',
        },
      },
    },
  ]);
  coll.f0rEach((item) => {
    if (item.TOTAL_PRICE) {
      item.TOTAL_PRICE = item.TOTAL_PRICE.toString();
    }
  });
  console.log(coll.length);
  reply.send(coll);
};
