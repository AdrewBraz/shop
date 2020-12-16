import mongoose from 'mongoose';
import model from '../models/item';

exports.getData = async (req, reply) => {
  const { from, to } = req.body;
  // const coll = await model.aggregate([
  //   $facet: {
  //     groupBy : [{
  //       $match: {
  //         DATE: {
  //           $gte: new Date(from),
  //           $lte: new Date(to),
  //         },
  //       },
  //     }, {
  //       $group: {
  //         _id: {
  //           COD: '$COD',
  //           NAME: '$NAME',
  //         },
  //         USL: {
  //           $sum: '$USL',
  //         },
  //         NUM_DV: {
  //           $sum: '$NUM_DV',
  //         },
  //         NUM_DOC: {
  //           $sum: '$NUM_DOC',
  //         },
  //         NUM_CI: {
  //           $sum: '$NUM_CI',
  //         },
  //         TOTAL_PRICE: {
  //           $sum: '$TOTAL_PRICE',
  //         },
  //       }},
  //     ]
  //   }
  // ]);
  const coll = await model.aggregate([{
    $facet: {
      groupedCodes:[
        {$match: {DATE: {$gte: new Date(from), $lte: new Date(to)}}},
        {$group: {_id: {COD: '$COD', NAME: '$NAME'}, USL: {$sum: '$USL'}, NUM_DV: {$sum: '$NUM_DV'}, NUM_DOC: {$sum: '$NUM_DOC'}, NUM_CI: {$sum: '$NUM_CI'}, TOTAL_PRICE: {$sum: '$TOTAL_PRICE'}}},
        {$sort: {"_id.COD": 1}},
        {$project: {COD: "$_id.COD", USL:1, NUM_CI: 1}}
      ]
    }
  }])
  console.log(coll[0].groupedCodes)

  coll.forEach((item) => {
    item.COD = item._id.COD,
    item.NAME = item._id.NAME,
    delete item._id
    if (item.TOTAL_PRICE) {
      item.TOTAL_PRICE = item.TOTAL_PRICE.toString();
    }
  });
  reply.send(coll);
};
