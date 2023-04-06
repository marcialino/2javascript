function clicar(){
    var nota1 = Number(window.document.getElementById('nota1').value)

    var nota2 = Number(window.document.getElementById('nota2').value)
    var res = window.document.getElementById('res')

    var media = (nota1 + nota2)/2
    var conceito = ''
    var situacao = ''
    
    
        if (media > 9 && media <= 10){
            conceito = "A"
            situacao = 'APROVADO'
        }
        if(media > 7.5 && media <=9){
            conceito = 'B'
            situacao = 'APROVADO'
            
        }
        if(media > 6 && media <= 7.5){
            conceito = 'C'
            situacao = 'APROVADO'
            
        }
          
        if (media > 4 && media <= 6.0 ){
            conceito = 'D'
            situacao = 'REPROVADO'
        
        }
            
        if(media >=0 && media <=4){
            conceito = 'E'
            situacao = 'REPROVADO'
            
        }
        res.innerHTML = `Média: ${media}<br>Conceito: ${conceito} <br>
        Situação: <strong>${situacao}</strong>.`

    }

           
    