// @ts-check
import mongoose from 'mongoose';
import model from '../models/oms2';
import excelController from './excelController';

const getData = async (req, reply) => {
  const { from, to } = req.body;
  const coll = await model.aggregate([
    { $match: { DATE: { $gte: new Date(from), $lte: new Date(to) } } },
    {
      $group: {
        _id: { COD: '$COD', NAME: '$NAME', TYPE: '$TYPE' }, USL: { $sum: '$USL' }, NUM_DV: { $sum: '$NUM_DV' }, NUM_DOC: { $sum: '$NUM_DOC' }, NUM_CI: { $sum: '$NUM_CI' }, TOTAL_PRICE: { $sum: '$TOTAL_PRICE' },
      },
    },
    {
      $addFields: {
        COD: { $toInt: '$_id.COD' }, NAME: '$_id.NAME', TYPE: '$_id.TYPE', TOTAL_PRICE: { $toString: '$TOTAL_PRICE' },
      },
    },
    { $sort: { COD: 1 } },
    {
      $project: {
        _id: 0, COD: '$COD', NAME: '$NAME', TYPE: '$_id.TYPE', USL: '$USL', NUM_DV: '$NUM_DV', NUM_DOC: '$NUM_DOC', NUM_CI: '$NUM_CI', TOTAL_PRICE: '$TOTAL_PRICE',
      },
    },
  ]);

  // await excelController({ from, to }, { groupedCodes });

  reply.send([coll]);
};

export default getData;
