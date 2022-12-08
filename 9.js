let numbers = [1, 2, 1, 3, 4, 5]
   let min = Math.min( ...numbers);
   let a = numbers.indexOf(min, 0)
numbers.splice(a, 1)



console.log(numbers)