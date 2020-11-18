function diasemana(){
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var hoje = new Date();
    var diasem = hoje.getDay();
   
    switch(diasem) {
        case 0:
            msg.innerHTML = '<strong>Domingo</strong>'
            img.src = './public/images/Domingo.jpg'
            break;
        case 1:
            msg.innerHTML = '<strong>Segunda</strong>'
            img.src = './public/images/Segunda.jpg'
            break;
        case 2:
            msg.innerHTML = '<strong>Terça</strong>'
            img.src = './public/images/Terça.jpg'
            break;
        case 3:
            msg.innerHTML = '<strong>Quarta</strong>'
            img.src = './public/images/Quarta.jpg'
            break;
        case 4:
            msg.innerHTML = '<strong>Quinta</strong>'
            img.src = './public/images/Quinta.jpg'
            break;
        case 5:
            msg.innerHTML = '<strong>Sexta</strong>'
            img.src = './public/images/Sexta.jpg'
            break;
        case 6:
            msg.innerHTML = '<strong>Sabado</strong>'
            img.src = './public/images/Sabado.jpg'
            break;
        
    }


}