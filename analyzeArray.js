function analyzeArray(arr) {
  let object = {};
  let sum = 0;
  let min;
  let max;
  let length = arr.length;

  for (let i = 0; i < arr.length; i++){
    sum += arr[i];
    if(min === undefined && max === undefined) {
      min = arr[i];
      max = arr[i];
    }
    if(arr[i] < min) {
      min = arr[i];
    }
    if(arr[i] > max) {
      max = arr[i];
    }
  }

  object.average = sum / length;
  object.length = length;
  object.max = max;
  object.min = min;

  return object;
}

module.exports = analyzeArray;