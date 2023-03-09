function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
   var data = new Date()

    var hora = data.getHours()
    

    msg.innerHTML = `Agora são ${hora} horas!`

    if (hora <=12){
     img.src = 'diaweb.png'
      document. body.style.background = '#afae76'
    
    }else if(hora >12 && hora <= 18){
        img.src = 'tardeweb.png'
        document.body.style.background = '#febb90'
    }else{
        img.src = 'noiteweb1.png'
        document. body.style.background = '#273234'
    }


}