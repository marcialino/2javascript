function calcular(){
var numa = parseFloat(window.document.getElementById('numa').value)

var numb = parseFloat(window.document.getElementById('numb').value)

var numc = parseFloat(window.document.getElementById('numc').value)

var res = window.document.getElementById('res')

var delta = (numb*numb) - (4*numa*numc)
var raiz = Math.sqrt(delta)

if (delta > 0){
var x1 = (-numb + raiz)/(2*numa)
var x2 = (-numb - raiz)/(2*numa)
    
res.innerHTML = `Os valores das duas raizes reais são:<strong>${x1}</strong> e <strong>${x2}</strong>`
}
if (delta == 0){
    x1 = -numb/(2*numa)
    res.innerHTML = `As duas raizes são iguais, sendo o valor:<strong>${x1}</strong>`

}else if(delta < 0){    
    res.innerHTML = `O delta é negativo, a equação não tem raiz real!`
}
    
}