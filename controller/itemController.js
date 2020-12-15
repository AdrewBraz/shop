import mongoose from 'mongoose';
import model from '../models/item';


exports.getData = async (req, reply) => {
  const {from, to } = req.body;
  const fromDate = new Date(from);
  const toDate = new Date(to);
  console.log(fromDate, toDate)
  const coll = await model.aggregate([
    {
      '$match': {
        'DATE': {
          '$gte': new Date('Sun, 31 Dec 2017 21:00:00 GMT'), 
          '$lte': new Date('Mon, 01 Jan 2018 21:00:00 GMT')
        }
      }
    }, {
      '$group': {
        '_id': {
          'COD': '$COD', 
          'NAME': '$NAME'
        }, 
        'USL': {
          '$sum': '$USL'
        }, 
        'TOTAL_PRICE': {
          '$sum': '$TOTAL_PRICE'
        }
      }
    }
  ]);
  coll.map(item => {
    if(item["TOTAL_PRICE"]){
      item["TOTAL_PRICE"] = item["TOTAL_PRICE"].toString()
    }
  })
  console.log(coll)
  reply.send(coll)
};
