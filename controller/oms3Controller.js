// @ts-check
import mongoose from 'mongoose';
import model from '../models/oms3';
import excelController from '../server/excel/excel';

const getData = async (req, reply) => {
  const { from, to } = req.body;
  const coll = await model.aggregate([
    {
      $facet: {
        groupedDepartments: [
          { $match: { DATE: { $gte: new Date(from), $lte: new Date(to) } } },
          {
            $group: {
              _id: { ORD_NAME: '$ORD_NAME', COD: '$COD', NAME: '$NAME' }, NUM_USL: { $sum: '$NUM_USL' }, NUM_CI: { $sum: '$NUM_CI' }, TOTAL_PRICE: { $sum: '$TOTAL_PRICE' },
            },
          },
          {
            $group: {
              _id: '$_id.ORD_NAME',
              codes: {
                $push: {
                  ORD_NAME: '$_id.ORD_NAME', COD: { $toInt: '$_id.COD' }, NAME: '$_id.NAME', NUM_USL: { $sum: '$NUM_USL' }, NUM_CI: { $sum: '$NUM_CI' }, TOTAL_PRICE: { $toString: { $sum: '$TOTAL_PRICE' } },
                },
              },
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
  const { groupedDepartments, total } = coll[0];

  const data = groupedDepartments.reduce((acc, department) => {
    department.codes.forEach((item) => {
      acc.push(item);
    });
    return acc;
  }, []);

  await excelController({ from, to }, [data, total])

  reply.send(data);
};

export default getData;
