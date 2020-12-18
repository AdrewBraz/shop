import mongoose from 'mongoose';
import model from '../models/item';
import excelController from './excelController';

exports.getData = async (req, reply) => {
  const { from, to } = req.body;
  const coll = await model.aggregate([{
    $facet: {
      groupedCodes: [
        { $match: { DATE: { $gte: new Date(from), $lte: new Date(to) } } },
        {
          $group: {
            _id: { COD: '$COD', NAME: '$NAME' }, USL: { $sum: '$USL' }, NUM_DV: { $sum: '$NUM_DV' }, NUM_DOC: { $sum: '$NUM_DOC' }, NUM_CI: { $sum: '$NUM_CI' }, TOTAL_PRICE: { $sum: '$TOTAL_PRICE' },
          },
        },
        { $addFields: { COD: { $toInt: '$_id.COD' }, NAME: '$_id.NAME', TOTAL_PRICE: { $toString: '$TOTAL_PRICE' } } },
        { $sort: { COD: 1 } },
        { $project: { _id: 0 , COD: '$COD', NAME: '$NAME', USL: '$USL', NUM_DV: '$NUM_DV', NUM_DOC: '$NUM_DOC', NUM_CI: '$NUM_CI', TOTAL_PRICE: '$TOTAL_PRICE' }},
      ],
      total: [
        { $match: { DATE: { $gte: new Date(from), $lte: new Date(to) } } },
        {
          $group: {
            _id: null, USL: { $sum: '$USL' }, NUM_DV: { $sum: '$NUM_DV' }, NUM_DOC: { $sum: '$NUM_DOC' }, NUM_CI: { $sum: '$NUM_CI' }, TOTAL_PRICE: { $sum: '$TOTAL_PRICE' }, COD: { $sum: '$COD' }, NAME: { $sum: '$NAME' },
          },
        },
        { $addFields: { TOTAL_PRICE: { $toString: '$TOTAL_PRICE' } } },
        { $set: { COD: null, NAME: null } },
        { $project: { _id: 0 , COD: '$COD', NAME: '$NAME', USL: '$USL', NUM_DV: '$NUM_DV', NUM_DOC: '$NUM_DOC', NUM_CI: '$NUM_CI', TOTAL_PRICE: '$TOTAL_PRICE' }},
      ],
      vmp: [
        { $match: { DATE: { $gte: new Date(from), $lte: new Date(to) }, COD: { $regex: '^200' } } },
        {
          $group: {
            _id: null, COD: { $sum: '$COD' }, NAME: { $sum: '$NAME' }, USL: { $sum: '$USL' }, NUM_DV: { $sum: '$NUM_DV' }, NUM_DOC: { $sum: '$NUM_DOC' }, NUM_CI: { $sum: '$NUM_CI' }, TOTAL_PRICE: { $sum: '$TOTAL_PRICE' },
          },
        },
        { $addFields: { TOTAL_PRICE: { $toString: '$TOTAL_PRICE' } } },
      ],
    },
  }]);
  const { groupedCodes, total, vmp } = coll[0];

  await excelController({from,to}, {groupedCodes})

  reply.send({ groupedCodes, total, vmp });
};
