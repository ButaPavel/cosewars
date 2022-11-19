function validParentheses(parens) {
    let arr = Array.from(parens)
    let number = []

    let j = 0
    do {
        for (i = 0; i < arr.length; i++){
            if ((arr[i] == "(") && (arr[i+1] == ")")){
                arr.splice(i, 2) // удаляет с 1 1 элемнент
            }
        }
        number[j] = arr.length

        j=j+1
        console.log (arr)
    } while (number[j-1] != number[j-2])

    return arr == '';
}