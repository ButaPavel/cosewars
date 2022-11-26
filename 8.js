function fibonacci(max) {
    if (max == 0 || max == 1) {
        return 0
    }
    let i = 0;
    let number = [];
    number[0] = 0
    number[1] = 1;
    let sum = 0;
   for (i = 2; number[i-1] <= max; i++){
    number[i] = number[i-1] + number[i-2];
    if (number[i] >= max) {
        return sum;
    }
    if (number[i] % 2 == 0) {
     sum = sum + number[i];
     }

}

}
console.log(fibonacci(25997544))