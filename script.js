let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let descricao = document.querySelector('.d-1-4');

let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1-right');
let numeros = document.querySelector('.d-1-3');


let etapaAtual = 0;
/*armazena os numeros da urna */
let numero = '';

let vbranco = false;

let votoValido = false;

function comecarEtapa(){
    let etapa = etapas[etapaAtual];

    let numeroHtml = '';
    numero = '';
    vbranco = false;
    

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
    let etapa = etapas[etapaAtual];
    let candidato = etapa.candidatos.filter((item)=>{
        if(item.numero === numero){
            return true;
        }else{
            return false;
        }
    })

    if(candidato.length > 0){
        candidato = candidato[0];
        seuVotoPara.style.display = 'block';
        descricao.innerHTML = `Nome: ${candidato.nome}</br>Partido: ${candidato.partido}`;
        aviso.style.desplay = 'block';

        let fotosHtml = '';
        for(let i in candidato.fotos){
            fotosHtml += `<div class="d-1-image"><img src="${candidato.fotos[i].url}" alt="">${candidato.fotos[i].legenda}</div>`;
        }
        lateral.innerHTML = fotosHtml;
        

    }else{
        seuVotoPara.style.display = 'block';
        descricao.innerHTML = '<div class="aviso--grande pisca">Voto Nulo</div>';
        
        
    }
}


function clicou(n){
    let elnumero = document.querySelector('.numero.pisca');
    if(elnumero !== null){
        elnumero.innerHTML = n;
        numero = `${numero}${n}`;

        elnumero.classList.remove('pisca');




        if( elnumero.nextElementSibling !== null){
        elnumero.nextElementSibling.classList.add('pisca');
        }else{
            atualizaInterface();
        }
    }
}

function branco(){
   
        numero = '';
        vbranco = true;
        seuVotoPara.style.display = 'block';
        numeros.innerHTML = '';
        descricao.innerHTML = '<div class="aviso--grande pisca">Voto Em Branco</div>';
        lateral.innerHTML = '';
        
    
}

function corrige(){
    return comecarEtapa();
}

function confirmar(){
    let votoConfirmado = false;
    let etapa = etapas[etapaAtual];
    if(vbranco === true){
        votoConfirmado = true;
        
    }else if(numero.length === etapa.numeros){
        votoConfirmado = true;
        
    }

    if(votoConfirmado){
        etapaAtual++;
        if(etapas[etapaAtual] !== undefined){
            comecarEtapa();
        }else{
            seuVotoPara.style.display = 'none';
            cargo.innerHTML = '<div class="aviso--grande2 pisca">FIM</div>';
            descricao.innerHTML = '';
            aviso.style.desplay = 'none';
            lateral.innerHTML = '';
            numeros.innerHTML = numeroHtml;
        }
    };

}

comecarEtapa();

