var a = [1,4,6,8,5,]
a.push(9) 
a.sort()
console.log(a)

for(var pos in a){
    console.log(`A posição ${pos} tem ${a[pos]}`)
}
console.log(`O vetor tem ${a.length} posições`)

var pos = a.indexOf(5)
if (pos== -1){
    console.log(`O valor não foi encontrado`)
}else{
    console.log(`O valor está na posição ${pos}`)
}