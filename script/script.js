function insert(valor){
  let numero = document.querySelector('#display').innerHTML;
    document.querySelector('#display').innerHTML = numero + valor;
}

function clean(){
  document.querySelector('#display').innerHTML = '';
}

function apaga(){
  let valor = document.querySelector('#display').innerHTML;
  document.querySelector('#display').innerHTML = valor.substring(0, valor.length -1);
}

function calcular(){
  let resultado = document.querySelector('#display').innerHTML;
  if(resultado){
    document.querySelector('#display').innerHTML = eval(resultado);
  }
}