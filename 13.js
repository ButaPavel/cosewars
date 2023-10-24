function findPosition(num){
    //coding and coding..

    let a=''

    for (i=1; i>0; i++){
        a=a+String(i);

        if (a.indexOf(num)>0) {break}
    }



    return a.indexOf(num);

}

console.log(findPosition('456'))