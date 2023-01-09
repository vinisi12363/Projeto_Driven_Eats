let valorTotal=0.0;

let vlrComida=0; // pegar valores  somente do prato selecionado e sobrescrever de propósito
let vlrBebida=0; 
let vlrSobremes=0;


let comida;   // strings para adicionar na div depois que apertar o botão fechar pedido.
let bebida;
let sobremesa;

let mensagemDeEnvio;

let nome;   // armazenar endereço e nome.
let endereco;
document.getElementById("btnPedir").setAttribute ("disabled", "");


//preciso criar uma function on click pra trsnformar a borda em verde, por enquanto/

function divSelecionada_comida(divSelecionada){
       // verificando se houve click de seleção anterior e limpando.
    const ion_icon=divSelecionada.querySelector(".svg-icon");

  
    
    const divClicadaAnteriormente = divSelecionada.parentElement.querySelector ('.selecionado');
    

    if (divClicadaAnteriormente !== null ){
        divClicadaAnteriormente.querySelector(".svg-icon").classList.add('icon-hidden');
        divClicadaAnteriormente.classList.remove ('selecionado');
        
        }

        ion_icon.classList.remove('icon-hidden');  
        divSelecionada.classList.toggle ('selecionado');
         // então a partir daqui, tudo que fizer com a divClicada vai acontecer com a div real la no html.
   

    // pegando o valor do prato 
    const preco=divSelecionada.querySelector('.p-preco').innerHTML;
  
   
    const array = preco.split('');
    let numArray = [];
    let valor=0;
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
   
    comida = divSelecionada.querySelector('.h2-titulocomida').innerHTML;
    vlrComida=valor;
    

   
    
    continuar();

} 

function divSelecionada_bebida(divSelecionada){    

    
    // verificando se houve click de seleção anterior e limpando.
    const ion_icon=divSelecionada.querySelector(".svg-icon");

    
    const divClicadaAnteriormente = divSelecionada.parentElement.querySelector ('.selecionado');
   
    if (divClicadaAnteriormente !== null ){
        divClicadaAnteriormente.querySelector(".svg-icon").classList.add('icon-hidden');
        divClicadaAnteriormente.classList.remove ('selecionado');
        
    }

    ion_icon.classList.remove('icon-hidden');
    divSelecionada.classList.toggle ('selecionado');
     
  
    // pegando o valor do prato 
    const preco=divSelecionada.querySelector('.p-preco').innerHTML;
    
   
    const array = preco.split('');
    let numArray = [];
    let valor=0;
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
   

    bebida = divSelecionada.querySelector('.h2-tituloBebida').innerHTML;
    vlrBebida=valor;
    continuar();

} 
function divSelecionada_sobremesa(divSelecionada){    
   
    const ion_icon=divSelecionada.querySelector(".svg-icon");
 

     // verificando se houve click de seleção anterior e limpando.
    const divClicadaAnteriormente = divSelecionada.parentElement.querySelector ('.selecionado');
    if (divClicadaAnteriormente !== null ){
        divClicadaAnteriormente.querySelector(".svg-icon").classList.add('icon-hidden');
        divClicadaAnteriormente.classList.remove ('selecionado');
        
    }
    ion_icon.classList.remove('icon-hidden');  
    divSelecionada.classList.toggle ('selecionado');

    // pegando o valor do prato 
    const preco=divSelecionada.querySelector('.p-preco').innerHTML;
    const array = preco.split('');
    let numArray = [];
    let valor=0;
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

    sobremesa = divSelecionada.querySelector('.h2-tituloSobremesa').innerHTML;
    vlrSobremes=valor;
    
    continuar();
} 




function continuar(){  /// função chamada ao final de cada seleção para verificar se o usuario pode continuar.
    if (comida != undefined && bebida != undefined && sobremesa != undefined) {
        // habilita o botão de fechar pedido.
    
        document.getElementById("btnPedir").removeAttribute("disabled");
        document.getElementById("btnPedir").innerHTML="Fechar pedido";
        document.getElementById("btnPedir").style.color="#FFFFFF";
        document.getElementById("btnPedir").style.fontStyle="bold";
        document.getElementById("btnPedir").style.background ="#32B72F";


    } else {  
        document.getElementById("btnPedir").setAttribute("disabled","");
    }


}

function calcularTotal(){ //para calcular o valor dos pratos e lançar no final.
    valorTotal=vlrComida+vlrBebida+vlrSobremes; // somando o valor com a variavel global , pra lançar no inner html no final.
  
} 
function fecharPedido(){
    calcularTotal();

     mensagemDeEnvio= "Olá, gostaria de fazer o pedido:" + 
    "\n- Prato: " + comida +  
    "\n- Bebida: " + bebida + 
    "\n- Sobremesa: " + sobremesa + 
    "\nTotal: R$ " +valorTotal.toFixed(2).replace(".", ",");

    let msg = encodeURIComponent(mensagemDeEnvio);
    window.open(`https://wa.me/557133706350?text=${msg}`);
   
}
