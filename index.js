function iterativeLog(arr) {
  arr.forEach((element, index, array) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  const arr = [0, 2, 4]
  arr.forEach(callback)
  return arr
}

function doToArray(arr, callback) {
  arr.forEach(callback)
}
