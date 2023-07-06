function bubbleSort(items) {
  for (let last = items.length - 1; last > 0; last--) {
    for (let i = 0; i < last; i++) {
      console.log(i);
      if (items[i] > items[i + 1]) {
        [items[i], items[i + 1]] = [items[i + 1], items[i]];
      }
    }
  }

  return items;
}

function intelligentBubbleSort(items) {
  let swap;
  let last = items.length - 1;
  do {
    swap = false;
    for (let i = 0; i < last; i++) {
      console.log(last);
      if (items[i] > items[i + 1]) {
        [items[i], items[i + 1]] = [items[i + 1], items[i]];
        swap = true;
      }
    }
    last--;
  } while (swap);

  return items;
}

let arr = [2, 1, 3, 4, 5];
console.log(bubbleSort(arr));
