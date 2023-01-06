let valorTotal=0;


//preciso criar uma function on click pra trsnformar a borda em verde, por enquanto/

function divSelecionada(divSelecionada){

    // verificando se houve click de seleção anterior e limpando.
    const divClicadaAnteriormente = document.querySelector ('.selecionado');
    if (divClicadaAnteriormente != null ){
        divClicadaAnteriormente.classList.remove ('selecionado');
        icon=document.querySelector('.svg-icon').style.display ='none'; // prguntar ao professor ou ao tutor como pegar a this dessa classe ai.
    }

    let divClicada=document.querySelector (divSelecionada); // essa variável serve para fazer um link com a  tag que foi criada...
         // então a partir daqui, tudo que fizer com a divClicada vai acontecer com a div real la no html.
    console.log(divClicada);
    divClicada.classList.toggle ('selecionado');

    // pegando o valor do prato 
    const preco=document.querySelector('.p-preco');
    const array = preco.innerHTML.split('');
    let numArray = [];
    let valor=0;
    console.log(array); 
    for(let i=0;i<array.length;i++){   // for para pegar o valor numerico de dentro da tag p.
        
        if (array[i] === '0' ||array[i] === '1' ||array[i] === '2' ||array[i] === '3' ||array[i] === '4' ||array[i] === '5' ||array[i] === '6' ||array[i] === '7' ||array[i] === '8' ||array[i] === '9' ||array[i] === ',' ) {
            if (array[i]===',') {
                numArray.push('.');
            }
            else{
                numArray.push(array[i]);
            }
        }

    } 
    
    valor= parseFloat (numArray.join("")); // transforma o vetor em string e depois em float.
    calcularTotal(valor); // passando  o valor pra ser somado.
    console.log("O VALOR total é:"+valorTotal);

    const icon=document.querySelector('.svg-icon').style.display ='flex';


} 


function calcularTotal(preco){ //para calcular o valor dos pratos e lançar no final.
    valorTotal+=preco; // somando o valor com a variavel global , pra lançar no inner html no final.

} 



