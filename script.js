let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let descricao = document.querySelector('.d-1-4');

let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1-right');
let numeros = document.querySelector('.d-1-3');


let etapaAtual = 0;

function comecarEtapa(){
    let etapa = etapas[etapaAtual];

    let numeroHtml = '';
    /*armazena os numeros da urna */
    let numero = '';

    for(let i = 0; i < etapa.numeros;i++){
        if(i === 0 ){
            numeroHtml += '<div class="numero pisca"></div>';
        }else {
            numeroHtml += '<div class="numero"></div>';
        }
        
    }

    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.desplay = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHtml;

}

function atualizaInterface(){
    console.log(numeroOO);
}


function clicou(n){
    let elnumero = document.querySelector('.numero.pisca');
    if(elnumero !== null){
        elnumero.innerHTML = n;
        numeroOO = '${numero}${n}';

        elnumero.classList.remove('pisca');




        if( elnumero.nextElementSibling !== null){
        elnumero.nextElementSibling.classList.add('pisca');
        }else{
            atualizaInterface();
        }
    }
}

function branco(){

}

function corrige(){

}

function confirmar(){

}

comecarEtapa();

