function clicar(){
    var num_dia = Number(window.document.getElementById('num_dia').value)

    var res = window.document.getElementById('res')
    
    var nome_dia = ''

    switch(num_dia){
        case 1:
            nome_dia = "Domingo"
            break
        case 2:
            nome_dia = "Segunda Feira"
            break
        case 3:
            nome_dia = "Terça Feira"
            break
        case 4:
            nome_dia = "Quarta Feira"  
            break
            
        case 5:
            nome_dia = "Quinta Feira"
            break

         case 6:
            nome_dia = "Sexta Feira"   
            break

        case 7:
            nome_dia = "Sábado"
            break

        default:
            nome_dia = "Dado inválido"
    }
        res.innerHTML = `<strong>${nome_dia}</strong> foi o dia identificado!`
}