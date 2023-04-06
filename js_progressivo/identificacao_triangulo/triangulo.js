function clicar(){
    var lado1 = Number(window.document.getElementById('lado1').value)

    var lado2 = Number(window.document.getElementById('lado2').value)

    var lado3 = Number(window.document.getElementById('lado3').value)

    var res = window.document.getElementById('res')

    var triangulo = ''
    

    if((lado1 + lado2) > lado3 ){
    
    }if((lado1 + lado3) > lado2){
  
    }if((lado2 + lado3) > lado1){
        alert('Os lados formam um triângulo.')
    }else{
        alert('Dados inválido. Os lados não formam um triângulo. Preecha os dados novamente, para prosseguir. ')
    }

    if(lado1 == lado2 == lado3){
        res.innerHTML = `Os lados formam um triângulo Equilátero`
    }if(lado1 == lado2 || lado1 == lado3 ||lado2 ==lado3){
        res.innerHTML =  `Os lados formam um triângulo isósceles`
    }if(lado1 != lado2 !=lado3){
        res.innerHTML = `Os lados forma um triângulo escaleno`
    }
        
     
}