import Excel from 'exceljs';

const addtoObject = (obj, field, item) => {
  switch(field){
    case 'Наименование':
      obj['SMO_NAME'] = item.replace(/"([^"]+(?="))"/g, '$1')
      break;
    case 'Профиль':
      obj['PROFILE'] = item;
      break;
    case 'Сумма ЗЛ':
      obj['TOTAL_PRICE'] = item.toString().replace(/\s+/g, '').replace(/[,]/g, '.')
      break;
    default:
      return;
  }
}

export default async (path) => {
    const workbook = new Excel.Workbook();
    const data = await workbook.xlsx.readFile(path)
    .then(() => {
        const worksheet = workbook.getWorksheet('Sheet0');
        const arr = [];
        const flags = [undefined, 'Итого', 'Всего', ' ']
        let isNeeded = false
        worksheet.eachRow({ includeEmpty: true }, function(row, rowNumber) {
            if(isNeeded){
            const el = row.values[1];
            flags.includes(el) ? null : arr.push(row.values.slice(1))
            }
            if(row.values.includes(' - По плательщику и профилю')){
            isNeeded = true;
            }
            if(row.values.includes(' ')){
            isNeeded = false;
            }
        });
        const keys = arr[0];
        const json = arr.slice(1).reduce((acc, row) => {
          const obj = {}
          row.forEach((item, i) => {
              addtoObject(obj, keys[i], item)
          })
          acc.push(obj)
          return acc
          }, [])
        return JSON.stringify(json)
    })
    .catch((err) => {
    console.log(err)
    })
    return data;
}