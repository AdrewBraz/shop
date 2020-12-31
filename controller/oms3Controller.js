// @ts-check
import mongoose from 'mongoose';
import model from '../models/oms3';

const getData = async (req, reply) => {
  const { from, to } = req.body;
  const coll = await model.aggregate([
    {
      $facet: {
        overall: [
          { $match: { DATE: { $gte: new Date(from), $lte: new Date(to) } } },
          {
            $addFields: {
              TOTAL_PRICE: { $toString: '$TOTAL_PRICE' },
            },
          },
          { $sort: { ORD_NAME: 1 } },
          {
            $project: {
              _id: 0, ORD_NAME: '$ORD_NAME', COD: '$COD', PATIENT_NUM: '$PATIENT_NUM', NAME: '$NAME', NUM_USL: '$USL', NUM_CI: '$NUM_CI', TOTAL_PRICE: '$TOTAL_PRICE',
            },
          },
        ],
        total: [
          { $match: { DATE: { $gte: new Date(from), $lte: new Date(to) } } },
          {
            $group: {
              _id: { ORD_NAME: '$ORD_NAME' }, PATIENT_NUM: { $sum: '$PATIENT_NUM' }, NUM_USL: { $sum: '$NUM_USL' }, NUM_CI: { $sum: '$NUM_CI' }, TOTAL_PRICE: { $sum: '$TOTAL_PRICE' },
            },
          },
          { $addFields: { TOTAL_PRICE: { $toString: '$TOTAL_PRICE' }, ORD_NAME: '$_id.ORD_NAME' } },
          { $sort: { ORD_NAME: 1 } },
          {
            $project: {
              _id: 0, ORD_NAME: '$ORD_NAME', PATIENT_NUM: '$PATIENT_NUM', NUM_USL: '$NUM_USL', NUM_CI: '$NUM_CI', TOTAL_PRICE: '$TOTAL_PRICE',
            },
          },
        ],
      },
    },
  ]);
  const { overall, total } = coll[0];

  reply.send([overall, total]);
};

export default getData;
