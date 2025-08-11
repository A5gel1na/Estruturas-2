
function Ex00_CorFavorita() {
  let elCorFavorita = document.getElementById('cores'); // elemento com a cor favorita do usuário
  let corFavorita = elCorFavorita.value; // Recupera o nome do usuario
  let elCaixaVermelha = document.getElementById('Ex00-caixa-vermelha'); // recupera a caixa da cor vermelha
  let elCaixaAzul = document.getElementById('Ex00-caixa-azul'); // recupera a caixa da cor azul
  if (corFavorita == "VERMELHO") {
    elCaixaAzul.style.display = 'none'; // Faz a caixa azul sumir
    elCaixaVermelha.style.display = 'inline-block';  // Faz a caixa vermelha aparecer
  } else if (corFavorita == "AZUL") {
    elCaixaVermelha.style.display = 'none'; // Faz a caixa vermelha sumir
    elCaixaAzul.style.display = 'inline-block';  // Faz a caixa azul aparecer    
  }
}


function Ex01_AnalisaNumero() {
  const elNum1 = document.getElementById('Ex01-num1'); // Recupera o elemento com o número 1 
  const num1 = parseFloat(elNum1.value); // Lê o primeiro valor e o transforma em número 
  const elResultado = document.getElementById('Ex01_Saida'); // Recupera o elemento que vai exibir o resultado
  if (num1 > 0) {// verifica se o número fornecido é positivo 
    elResultado.innerHTML = 'O número '+num1+' é positivo!';
  } else if (num1 < 0) { // verifica se o número fornecido é negativo
    elResultado.innerHTML = 'O número '+num1+' é negativo!';
  } else if (num1 == 0) { // verifica se o número fornecido é zero
    elResultado.innerHTML = 'Você forneceu o número ZERO!';
  }
}

function Ex02_MaiorNumero() {
  const elNum1 = document.getElementById('Ex02-num1'); // Recupera o elemento com o número 1 
  const num1 = parseFloat(elNum1.value); // Lê o primeiro valor e o transforma em número 
  const elNum2 = document.getElementById('Ex02-num2'); // Recupera o elemento com o número 2
  const num2 = parseFloat(elNum2.value); // Lê o segundo valor e o transforma em número 
  const elResultado = document.getElementById('Ex02_Saida'); // Recupera o elemento que vai exibir o resultado
  if (num1 > num2) {
    elResultado.innerHTML = 'O número '+num1+' é o maior!';
  } else if (num2 > num1) {
    elResultado.innerHTML = 'O número '+num2+' é o maior!';
  } else if (num1 == num2) {
    elResultado.innerHTML = 'Os números '+num1+' e '+num2+' são iguais!';
  }
}

function Ex03_Maioridade() {
  const elIdade = document.getElementById('Idade_Ex03'); // Recupera o elemento com o número 1 
  const idade = parseFloat(elIdade.value); // Lê o primeiro valor e o transforma em número 
  const elResultado = document.getElementById('Ex03_Saida'); // Recupera o elemento que vai exibir o resultado
  if (idade >= 18) {
    elResultado.innerHTML = 'Fulano, você é maior de idade!';
  } else 
    elResultado.innerHTML = 'Fulano, você é menor de idade!';
  }

  function Ex04_Media() {
  const elNota1 = document.getElementById('Nota1_Ex04'); // Recupera o elemento com o número 1 
  const nota1 = parseFloat(elNota1.value); // Lê o primeiro valor e o transforma em número 
  const elNota2 = document.getElementById('Nota2_Ex04'); // Recupera o elemento com o número 1 
  const nota2 = parseFloat(elNota2.value); // Lê o primeiro valor e o transforma em número 
  let media = (nota1 + nota2)/2;

  const elResultado = document.getElementById('Ex04_Saida'); // Recupera o elemento que vai exibir o resultado
  if (media >=7.0 && media <= 8.9) {
    elResultado.innerHTML = 'Sua média é '+ media + '. Aprovado!';
  } else if (media >= 9.0 && media <=10.0)
    elResultado.innerHTML = 'Sua média é '+ media + '. Aprovado!';
    else if (media >= 0 && media <=6.9)
    elResultado.innerHTML = 'Sua média é '+ media + '. Reprovado!';
  }

  function Ex05_Quilometros() {
  const elQuilometros = document.getElementById('Km_Ex05'); // Recupera o elemento com o número 1 
  const quilometros = parseFloat(elQuilometros.value); // Lê o primeiro valor e o transforma em número 
  const elLitros = document.getElementById('Litros_Ex05'); // Recupera o elemento com o número 1 
  const litros = parseFloat(elLitros.value); // Lê o primeiro valor e o transforma em número 
  let media = quilometros/litros;

  const elResultado = document.getElementById('Ex05_Saida'); // Recupera o elemento que vai exibir o resultado
  if (media >= 10.0) {
    elResultado.innerHTML = media +'. Consumo Eficiente!';
  } else 
    elResultado.innerHTML = media +'. Consumo Ineficiente!';  
  }

  function Ex05_Quilometros_mod1() {
  const elQuilometros = document.getElementById('Km_Ex05_mod1'); // Recupera o elemento com o número 1 
  const quilometros = parseFloat(elQuilometros.value); // Lê o primeiro valor e o transforma em número 
  const elValorLitro = document.getElementById('Valor_Ex05_mod1'); // Recupera o elemento com o número 1 
  const valorLitros = parseFloat(elValorLitro.value); // Lê o primeiro valor e o transforma em número 
  const elValorGasto = document.getElementById('ValorG_Ex05_mod1'); // Recupera o elemento com o número 1 
  const valorGasto = parseFloat(elValorGasto.value); // Lê o primeiro valor e o transforma em númer
  let media = valorGasto/valorLitros;

  const elResultado = document.getElementById('Ex05_Saida_mod1'); // Recupera o elemento que vai exibir o resultado
  if (media >= 10.0) {
    elResultado.innerHTML = 'Você gastou R$' + valorGasto + ' em combustível para percorrer' + quilometros +'km. Como o combustível custa R$' + valorLitros + ' por litro, isso significa que seu veículo fez a média de' + media + 'km/l. Consumo eficiente';
  } else 
    elResultado.innerHTML = 'Você gastou R$' + valorGasto + ' em combustível para percorrer' + quilometros +'km. Como o combustível custa R$' + valorLitros + ' por litro, isso significa que seu veículo fez a média de' + media + 'km/l. Consumo Ineficiente';;  
  }

  function Ex06_Calculadora() {
  let elOper = document.getElementById('operacoes_Ex06'); // elemento com a cor favorita do usuário
  let oper = elOper.value; // Recupera o nome do usuario
  let elNum1 = document.getElementById('Num1_Ex06');
  let elNum2 = document.getElementById('Num2_Ex06');
  let num1 = parseFloat(elNum1.value);
  let num2 = parseFloat(elNum2.value);

  let elCaixaSoma = document.getElementById('Ex06-caixa-MAIS'); // recupera a caixa da cor vermelha
  let elCaixaMenos = document.getElementById('Ex06-caixa-MENOS'); // recupera a caixa da cor vermelha
  let elCaixaMulti = document.getElementById('Ex06-caixa-MULT'); // recupera a caixa da cor vermelha
  let elCaixaDiv = document.getElementById('Ex06-caixa-DIV'); // recupera a caixa da cor azul
  if (oper == "ADD") {
    elCaixaMenos.style.display = 'none'; // Faz a caixa azul sumi
    elCaixaMulti.style.display = 'none'; // Faz a caixa azul sumi
    elCaixaDiv.style.display = 'none'; // Faz a caixa azul sumi
    elCaixaSoma.style.display = 'inline-block';  // Faz a caixa vermelha aparecer
    let resultado = num1 + num2;
    elCaixaSoma.innerHTML='O resultado é '+resultado; 
  } else if (oper == "MINUS") {
    elCaixaSoma.style.display = 'none'; // Faz a caixa vermelha sumir
    elCaixaMulti.style.display = 'none'; // Faz a caixa azul sumi
    elCaixaDiv.style.display = 'none'; // Faz a caixa azul sumi
    elCaixaMenos.style.display = 'inline-block';  // Faz a caixa vermelha aparecer 
    let resultado = num1 - num2;
    elCaixaMenos.innerHTML='O resultado é '+resultado;   
  } else if (oper == "MULT") {
    elCaixaSoma.style.display = 'none'; // Faz a caixa vermelha sumir
    elCaixaMenos.style.display = 'none'; // Faz a caixa azul sumi
    elCaixaDiv.style.display = 'none'; // Faz a caixa azul sumi
    elCaixaMulti.style.display = 'inline-block';  // Faz a caixa vermelha aparecer 
    let resultado = num1 * num2;
    elCaixaMulti.innerHTML='O resultado é '+resultado;   
  } else if (oper == "DIV") {
    elCaixaSoma.style.display = 'none'; // Faz a caixa vermelha sumir
    elCaixaMulti.style.display = 'none'; // Faz a caixa azul sumi
    elCaixaMenos.style.display = 'none'; // Faz a caixa azul sumi
    elCaixaDiv.style.display = 'inline-block';  // Faz a caixa vermelha aparecer 
    let resultado = num1 / num2;
    elCaixaDiv.innerHTML='O resultado é '+resultado;   
  }
}

function Ex07_Horario() {
  const elHora = document.getElementById('Hora_Ex07'); // Recupera o elemento com o número 1 
  const hora = parseFloat(elHora.value); // Lê o primeiro valor e o transforma em número 
  const elResultado = document.getElementById('Ex07_Saida'); // Recupera o elemento que vai exibir o resultado
  if (hora >= 6 && hora <= 12) {
    elResultado.innerHTML = 'Bom Dia!';
  } else if(hora >= 13 && hora <= 18) {
    elResultado.innerHTML = 'Boa Tarde!';
  } else if (hora >= 19 && hora <= 23) {
    elResultado.innerHTML = 'Boa Noite!';
  }  else if (hora >= 0 && hora <= 5) {
    elResultado.innerHTML = 'Boa Noite!';
}
}

function Ex08_Sangue() {
  const elNome = document.getElementById('Nome_Ex08'); // Recupera o elemento com o número 1 
  const nome = parseFloat(elNome.value); // Lê o primeiro valor e o transforma em número 
  const elIdade = document.getElementById('Idade_Ex08'); // Recupera o elemento com o número 1 
  const idade = parseFloat(elIdade.value); // Lê o primeiro valor e o transforma em número 
  const elPeso = document.getElementById('Peso_Ex08'); // Recupera o elemento com o número 1 
  const peso = parseFloat(elPeso.value); // Lê o primeiro valor e o transforma em número 

  const elResultado = document.getElementById('Ex08_Saida'); // Recupera o elemento que vai exibir o resultado
  if () {
    elResultado.innerHTML = media +'. Consumo Eficiente!';
  } else 
    elResultado.innerHTML = media +'. Consumo Ineficiente!';  
  }
