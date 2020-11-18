function carregar(){
var msg = document.getElementById('msg');
var img = document.getElementById('imagem');
var data = new Date();
var hora = data.getHours();

msg.innerHTML = `Agora são ${hora} horas.`


if (hora >= 0 && hora < 12){
    //Bom dia
    img.src = './public/img/Manha.jpg' 
    document.body.style.background = '#e2cd9f'
}
else if (hora >= 12 && hora < 18){
    // Boa tarde 
    img.src = './public/img/Tarde.jpg'
   document.body.style.background ='#d2691e'
}
else{
    //Boa noite 
    img.src = './public/img/Noite.jpg'
    document.body.style.background = '#515154'
}

}


