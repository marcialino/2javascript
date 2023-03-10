function verificar(){
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.getElementById('res')    
   var fsex = document.getElementsByName('radsex')
   var idade = ano - Number(fano.value)
        if(fano.value.length == 0 || Number(fano.value) > ano){
            window.alert('Verifique os dados e tente novamente')
        }
   var genero = ''
   var img = document.createElement('img')
   img.setAttribute('id', 'foto')
    if( fsex[0].checked){
        genero = 'Homem'
        if (idade >=0 && idade<10){
            //criança
            img.setAttribute('src','menino.png' )
        }else if (idade < 18){
            //jovem
            img.setAttribute('src', 'moco.png')
        }else if(idade >18 && idade < 60){
            //adulto
            img.setAttribute('src', 'adulto.png')
        }else{
            //idoso
            img.setAttribute('src', 'idoso.png')
        }

    }else if (fsex[1].checked){
        genero = 'Mulher'
        if (idade >= 0 && idade < 10){
            //criança
            img.setAttribute('src', 'menina.png')
        }else if(idade < 18){
            //jovem
            img.setAttribute('src', 'moca.png')
        }else if(idade > 18 && idade < 60){
            //adulto
            img.setAttribute('src', 'adulta.png')
        }else{
            //idoso
            img.setAttribute('src', 'idosa.png')
        }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos!`
    res.appendChild(img)
}