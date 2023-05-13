export const getIndexById = (arr, field, val) => {
  return arr.findIndex(item => item[field] === val)
}