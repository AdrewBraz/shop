// @ts-check
import mongoose from 'mongoose';
import model from '../models/oms3';
import excelController from '../server/excel/excel';

const getData = async (req, reply, name) => {
  const { from, to } = req.body;
  const coll1 = await model.aggregate([
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
    }
  ]);

  const coll2 = await model.aggregate([
    { $match: { DATE: { $gte: new Date(from), $lte: new Date(to) } } },
    { $group: { _id: { ORD_NAME: '$ORD_NAME' }, PATIENT_NUM:  {$sum: '$PATIENT_NUM'} } },
  ])

  const data = coll1.reduce((acc, department) => {
    console.log(department._id)
    department.codes.forEach((item) => {
      acc.push(item);
    });
    return acc;
  }, [])

  await excelController({ from, to }, data, name);

  reply.send(data);
};

export default getData;