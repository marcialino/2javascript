function posArray(ar){
   var ar2 =[]
   for(var c=0; c<ar.length; c++){
   var el = ar[c]
    if(el>=0){
      ar2.push(el)
    }
   }
   return ar2

}

var ar = [1,-2,3, 4, -6, 8]
var ar2 = posArray(ar)
console.log(ar2)