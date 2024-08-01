let numeros = [1, 2, 3, 101, 20, 3, 30, 31, 40];
numeros.sort();
console.log(numeros);

// Saída
// [1, 101, 2, 20, 3, 3, 30, 31, 40]

var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);
// Saída 
//[1, 2, 3, 4, 5]