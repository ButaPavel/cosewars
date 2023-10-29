function pattern(n){
    let output="1";
    let d = "";
    for (let i=2; i<n+1;i++) {

        for (let a=2; a<n; a++){
            d = d +'*'
        }
        output = output + `\n1` + d + i
    }
    return output;
}
console.log(pattern(3))