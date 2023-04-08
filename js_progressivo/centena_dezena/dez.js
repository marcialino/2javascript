function clicar(){
    var num = Number(window.document.getElementById('num').value)

    var res = window.document.getElementById('res')
    
    var div = num/2

    var cem = ''
    var dez = ''
    var un = ''

    if (num.length == 3){
          cem = (num.length)
          dez = (num.length)-1
          un = (num.length) -2
          
          res.innerHTML = `O número ${num} tem:<br> ${cem}centenas <br> ${dez} dezenas <br> ${un} unidades`

    }
    if (num.length = 2){
         dez = num.length
         un = num.length - 1
         
         res.innerHTML = `O número ${num} tem:<br> ${dez} dezenas <br> ${un} unidades`

    }if (num.length = 1){
        un = num.length
        res.innerHTML = `O número ${num} tem:<br> <br> ${un} unidades`

    }
    
}