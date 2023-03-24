function mediaArray(ar){
    var n = ar.length
    var soma = 0

    for(var c=0; c<n; c++){
        soma +=ar[c]
    }
    return soma/n
}
var ar = [1,3,9,15,90]
var media = mediaArray(ar)
console.log("mediaArray: ",media)