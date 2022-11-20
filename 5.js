word
let arr = Array.from(word)

    for (i = 0; i < arr.length; i++){
        if ((arr[i] == "e") && (arr[i+1] == "g") && (arr[i+2] == "g")){
            arr.splice(i, 3) // удаляет с 1 1 элемнент
        }
    }


return arr.join('');