import Excel from 'exceljs';

export default async (path, keys = [], flags = []) => {
    console.log(path)
    const workbook = new Excel.Workbook();
    const data = await workbook.xlsx.readFile(path)
    .then(() => {
        const worksheet = workbook.getWorksheet('Sheet0');
        const arr = [];
        let isNeeded = false
        worksheet.eachRow({ includeEmpty: true }, function(row, rowNumber) {
          const el = row.values[1];
          if(flags.includes(el)){
              isNeeded = !isNeeded;
          }
          isNeeded ? arr.push(row.values.slice(1)) : null
        })
        return arr
    })
    .catch((err) => {
    console.log(err)
    });
    const json = data.slice(1).reduce((acc, row) => {
        const obj = {};
        row.forEach((item, i) => {
            obj[keys[i]] = item;
        });
        acc.push(obj);
        return acc
    }, []);
    console.log(JSON.stringify(json))
    return JSON.stringify(json)
}