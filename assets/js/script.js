const container  = document.querySelector('.container'),
qrInput = container.querySelector('.form input'),
qrButton = container.querySelector('.form button'),
qrImage = container.querySelector('.qr-code .image');

qrButton.addEventListener('click', () => {

    let qrValue = qrInput.value;

    if(!qrValue){

        alert("Insira uma URL ou texto para gerar um QR Code");
        return;

    }

    qrButton.innerText = "Gerando um Qr Code...";
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;

    qrImage.addEventListener('load', () =>{

        qrButton.innerText = "Gerar Qr Code";
        container.classList.add('active');

    });

});

qrInput.addEventListener('keyup', () => {

    if(!qrInput.value){
        
        container.classList.remove('active');

    }

});