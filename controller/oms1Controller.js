// @ts-check

const storeData = async (data, reply, model, date = '2018-01-01') => {
  console.log(date)
  JSON.parse(data).forEach(async(el) => {
      const newItem = new model({
        SMO_NAME: el.SMO_NAME,
        PROFILE: el.PROFILE,
        TOTAL_PRICE: el.TOTAL_PRICE,
        DATE: date,
      })
      await newItem.save()
  });

   await reply.send({message: 'saved'});
};

export default storeData;