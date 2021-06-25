function findMinMax(arr) {
  let min = arr[0].pitch, max = arr[0].pitch;

  for (let i = 1, len=arr.length; i < len; i++) {
    let v = arr[i].pitch;
    min = (v < min) ? v : min;
    max = (v > max) ? v : max;
  }

  return [min, max];
}

export default findMinMax
