function somarArray(n){
var soma = 0
    for(var c = 0; c<n.length; c++){
    soma+=n[c]
    }
    return soma
}

var n = [2,3,-1,5,7,9,10,15,95]
var soma = somarArray(n)
console.log(soma)

function somarArray(i){
    var soma = 0
    
    for(var c= 0; c< i.length; c++){
        soma += i[c]
    }
    return soma
}

var i = [2,3,5,6,8]
var soma = somarArray(i)
console.log(soma)