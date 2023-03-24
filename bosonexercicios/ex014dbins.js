function valorMaior(ar){
    var maior = ar[0]
    
    for(var c=0; c<ar.length;c++){
       
        if(ar[c] > maior){
            maior = ar[c]   
        }
        
    }
    return maior
}
var ar = [2,3,4,5,6]
var maior = valorMaior(ar)

console.log(maior)