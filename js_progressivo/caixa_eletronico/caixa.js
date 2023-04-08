function sacar(){
    var saque = Number(window.document.getElementById('saque').value)

    var res = window.document.getElementById('res')
    
    sac = Array.from(String(saque)) 
    var cem = ''
    var cinq = ''
    var dez = ''
    var uni = ''


    if(sac.length == 3){
        cem = sac[0]
        if (sac[1] == 5){
            cinq = 1
        }if(sac[1] > 5){
            cinq = sac[1]/10
            dez = ((sac[1]*10) - 50)/10
        }/*else if(sac[2] > 0){
            uni = sac[2]
        }
    }*/
          
    }
    res.innerHTML = `Você receberá ${cem} notas de cem e ${cinq} notas de cinquenta.`


}