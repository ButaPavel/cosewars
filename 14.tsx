 function splitInteger (num, parts) {
    // Complete this function
    let a = Math.floor (num/parts)
    let ostatok = num - a*parts
    let o = []
    let i=1
    for (i=1; i<parts-ostatok; i++) {
        o[i-1]=a
    }
    for (i=parts-ostatok; i<parts; i++) {
        o[i-1]=a+1
    }
  return o
}
console.log (splitInteger(10,1))