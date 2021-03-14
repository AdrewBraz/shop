// @ts-check

const keysByReport = {
  '/oms2': ['COD', 'NAME', 'PRICE', 'PRICE_D', 'USL', 'DAYS', 'NUM_DV', 'NUM_DOC', 'NUM_CI', 'TOTAL_PRICE', 'DATE', 'TYPE'],
  '/oms3': ['ID', 'ORD_NAME', 'PATIENT_NUM', 'COD', 'NAME', 'NUM_USL', 'NUM_CI', 'TOTAL_PRICE', 'DATE'],
};

export default (data, report) => {
  const json = data.slice(1).reduce((acc, row) => {
    const keys = keysByReport[report]
    const obj = {};
    row.forEach((item, i) => {
      obj[keys[i]] = item;
    });
    acc.push(obj);
    return acc;
  }, []);
  return JSON.stringify(json);
};
