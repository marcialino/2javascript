function somarInt(num){
    var s = num.toString()
    var soma = 0 

    for(var char of s){
        var digito = parseInt(char)
        soma +=digito
    }
    return soma
}
 var resultado = somarInt(1235231)
 console.log(resultado)
