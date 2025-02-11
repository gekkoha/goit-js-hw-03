function filterArray(numbers, value) {
  let filteredNumbers = []; // Створюємо порожній масив для підходящих чисел

  for (let number of numbers) {
      if (number > value) { // Перевіряємо, чи число більше за value
          filteredNumbers.push(number);
      }
  }

  return filteredNumbers;
}

// Перевірка роботи функції:
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
