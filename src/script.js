

function randomnumber(a, b){
    return Math.floor(Math.random() * (b - a + 1)) + a;
}
function checarnum(resp) {
  let number = Number(resp);
  if(Number.isNaN(number)){
      alert("por favor digite apenas numeros para que possamos dar andamento com o aplicativo.");
  }else{
      validnum(resp);
  }
}
function validnum(resp) {
  if (resp<1000) {
      alert("Por favor, insira mais dígitos, sendo no mínimo 4.");
  } else {
      verificarnum(diff)
  }
}

function verificarnum(diff) {
  if (diff > 0 && diff < 100) {
      alert("Você terá que inserir um número menor do que o já inserido.");
  } else if (diff >= 100) {
      alert("Você terá que inserir um número muito menor do que o já inserido.");
  } else if (diff < 0 && diff > -100) {
      alert("Você terá que inserir um número maior do que o já inserido.");
  } else if (diff <= -100) {
      alert("Você terá que inserir um número muito maior do que o já inserido.");
  } else if (diff == 0) {
      alert("Parabéns! Você acertou o número.");
  } 
}

let resp = 1
num1 = randomnumber(1000, 10000); 
let diff
while (resp != num1 || resp == "100000"){
    resp = prompt("digite um numero com no minimo 4 digitos o numero sorteado foi o de  " +num1);
    diff = resp-num1;
    checarnum(resp)
}
