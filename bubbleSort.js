function bubbleSort(array) {
  let unsortedUntilIndex = array.length - 1;
  let sorted = false;

  while (!sorted) {
    sorted = true;

    for (let i = 0; i < unsortedUntilIndex; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        sorted = false;
      }
    }
    unsortedUntilIndex -= 1;
  }

  return array;
}

console.log(bubbleSort([65, 55, 45, 35, 25, 15, 10]));
