function analisar(){
    
    var count1 = 0
    var sim1 = window.document.getElementById('sim1')
   
    sim1.onclick = function (){
        count1++
        
    }   
    var count2 = 0
    var sim2 = window.document.getElementById('sim2')
    sim2.onclick = function(){
        count2++
    }

    var count3 = 0
    var sim3 = window.document.getElementById('sim3')
    sim3.onclick = function(){
        count3++
    }
    var count4 = 0
    var sim4 = window.document.getElementById('sim4')
    sim4.onclick = function(){
        count4++
    }
    var count5 = 0
    var sim5 = window.document.getElementById('sim5')
    sim5.onclick = function(){
        count5++
    }
   
    var count_sim = count1 + count2 + count3 + count4 + count5
       var result = ''
        if (count_sim == 2){
            result = 'suspeito'
        }if (count_sim == 5){
            result = 'assassino'
        }
        res.innerHTML = `${count1}`
    }
   
   /* var nao2 = window.document.getElementById('nao2')
    var nao3 = window.document.getElementById('nao3')
    var nao4 = window.document.getElementById('nao4')
    var nao5 = window.document.getElementById('nao5')

    var res = window.document.getElementById('res')

    sim1.addEventListener("click", function(){
        confirm = "sim"
    })*/
    
   
  