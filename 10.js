/*function decompose(num) {*/
let num = 2
let ostatok = num
let i
let a=2
let arr = []
let stepen = (oststok, chislo) => {
    for (i=2; chislo**i<=oststok; i++){
    }
    console.log('i-1=',i-1)
    return i-1
}
do {
    console.log('ostatok=', ostatok, 'a=',a,'stepen=',stepen(ostatok,a))
    if (stepen(ostatok,a)>1){
        arr[a-2]=stepen(ostatok,a)
        ostatok=ostatok-a**stepen(ostatok,a)

        console.log('arr=',arr)
        console.log('a=',a)

    }
    a++

} while (ostatok>(a-1)**2)
console.log([arr,ostatok])



