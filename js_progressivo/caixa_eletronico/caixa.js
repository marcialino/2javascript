function sacar(){
    var saque = Number(window.document.getElementById('saque').value)

    var res = window.document.getElementById('res')
    
    sac = Array.from(String(saque)) 
    var cem = ''
    var cinq = ''
    var dez = ''
    var cinco = ''
    var uni = ''
    


    if(sac.length == 3){
        cem = sac[0]
        if (sac[1] == 5){
            cinq = 1
        }if (sac[2] < 5){
            uni = sac[2]
            
            alert(`Você receberá ${cem} nota(s) de cem, ${cinq} nota(s) de cinquenta, e ${uni} nota(s) de um .`)
        }
            if (sac[2] == 5){
             cinco = 1

             alert(`Você receberá ${cem} nota(s) de cem, ${cinq} nota(s) de cinquenta, e ${cinco} nota(s) de cinco .`) 
        }
            if (sac[2] > 5){
                cinco = 1
                uni = sac[2] - 5

                alert(`Você receberá ${cem} nota(s) de cem, ${cinq} nota(s) de cinquenta, ${cinco} nota de cinco e ${uni} nota(s) de um .`)
            }
                       
        if(sac[1] > 5){
            cinq = 1
            dez = ((sac[1]*10) - 50)/10
        }if (sac[2] < 5){
            uni = sac[2]
        }
        alert(`Você receberá ${cem} nota(s) de cem, ${cinq} nota(s) de cinquenta, ${dez} nota(s) de dez e ${uni} nota(s) de um .`)
         
        if (sac[1] < 5){
            dez = ((sac[1]*10) - 50)/10
        }
        if(sac[2] > 0 && sac[2] < 5){
            uni = sac[2]
            res.innerHTML = `Você receberá ${cem} nota(s) de cem, ${dez} nota(s) de dez e ${uni} nota(s) de um.`

        }if(sac[2] == 5){
            uni = 1
        }
    }
          res.innerHTML = `Você receberá ${cem} nota(s) de cem, ${dez} nota(s) de dez e ${uni} nota(s) de cinco.`

     



}