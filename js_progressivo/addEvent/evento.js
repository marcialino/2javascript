window.onload = function(){
    var botao = document.getElementById('btn')
    var alertarId = function(){
        alert('O atributo id desse botão é " + this.id')}
    
    botao.addEventListener("click", alertarId, false)
}
   