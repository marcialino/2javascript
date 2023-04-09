window.onload = function(){
    var botao = document.getElementById('btn')
    botao.onclick = function (){
        alert('Botão clicado - um')
    }
    botao.onclick = function(){
        alert('Botão clicado - dois')
    }
    botao.onclick = function(){
        alert('Botão clicado - tres')
    }
}
   