// @ts-check

export default  (data, keys) => {
    const json = data.slice(1).reduce((acc, row) => {
      const obj = {}
      row.forEach((item, i) => {
        obj[keys[i]] = item;
      })
      acc.push(obj)
      return acc
    }, [])
    return JSON.stringify(json)
  }