 // Gerar um número aleatório entre 0 e 100
 var numero = Math.floor(Math.random()  * 101);

function advinhar() {
  

    var resp = document.getElementById('caixa').value;
  

    var valorUsuario = parseInt(resp);
  
    
    if (isNaN(valorUsuario)) {
      document.getElementById('resposta').innerText = 'Por favor, insira um número válido.';
    } else if (valorUsuario > numero) {
      document.getElementById('resposta').innerText = `O número ${valorUsuario} é maior que meu número.`;
    } else if (valorUsuario < numero) {
      document.getElementById('resposta').innerText = `O número ${valorUsuario} é menor que meu número.`;
    } else {
      document.getElementById('resposta').innerText = 'Parabéns! Você acertou o número!';
    }
    var tentativaDiv = document.createElement('p');
    tentativaDiv.innerText = `Tentativa: ${valorUsuario} - ${resultado}`;
    tentativasDiv.appendChild(tentativaDiv);
  
    // Limpar o valor da caixa de texto
    document.getElementById('caixa').value = '';




  }