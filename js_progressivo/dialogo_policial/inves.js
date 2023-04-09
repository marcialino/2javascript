function enviar(){
    var confirm = ''
    var sim1 = window.document.getElementById('sim1')
   
    var sim2 = window.document.getElementById('sim2')
    var sim3 = window.document.getElementById('sim3')
    var sim4 = window.document.getElementById('sim4')
    var sim5 = window.document.getElementById('sim5')
    var nao1 = window.document.getElementById('nao1')
    var nao2 = window.document.getElementById('nao2')
    var nao3 = window.document.getElementById('nao3')
    var nao4 = window.document.getElementById('nao4')
    var nao5 = window.document.getElementById('nao5')

    var res = window.document.getElementById('res')

    sim1.addEventListener("click", function(){
        confirm = "sim"
    })
    
res.innerHTML = `${confirm}`
   
}