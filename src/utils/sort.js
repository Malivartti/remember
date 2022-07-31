export function sortData(data, key, sort) {
  if (!sort) {
    return data
  }
  const sortedData = data.filter(item => item[key].toLowerCase().includes(sort.toLocaleLowerCase()))
  return sortedData
}