
function ImprimirTabuada(n){
    for (var c=1; c<=10; c++){
        var tab = n + "*" + c + "="+ n * c
        console.log(tab)
    }
}
 for(var c=1; c<=10; c++){
    ImprimirTabuada(c)
    console.log("")
 }