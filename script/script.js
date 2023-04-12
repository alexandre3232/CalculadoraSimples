
//função para inserir os números no display da calculadora.
function insert(valor){
  let numero = document.querySelector('#display').innerHTML;
    document.querySelector('#display').innerHTML = numero + valor;
}

//função para apaga tudo no display da calculadora.
function clean(){
  document.querySelector('#display').innerHTML = '';
}

//função para apara o ultimo digito no display da calculadora.
function apaga(){
  let valor = document.querySelector('#display').innerHTML;
  document.querySelector('#display').innerHTML = valor.substring(0, valor.length -1);
}

//função que realiza a operação de calcular.
function calcular(){
  let resultado = document.querySelector('#display').innerHTML;
  if(resultado){
    document.querySelector('#display').innerHTML = eval(resultado);
  }
}