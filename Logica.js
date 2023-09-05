function adcionar(num) {
  var numero = document.getElementById("resultado").innerHTML;
  if (numero.length < 15){
    document.getElementById("resultado").innerHTML = numero + num};
  
}

function limpar() {
  document.getElementById("resultado").innerHTML = "";
}

function apagar() {
  var resultado = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = resultado.substring(
    0,
    resultado.length - 1
  );
}

/*function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    
    if (resultado) {
        var evalResult = eval(resultado);
        var numeroFormatado = parseFloat(evalResult).toFixed(3); // Limita para 3 casas decimais
        
        document.getElementById('resultado').innerHTML = numeroFormatado;
    } else {
        document.getElementById('resultado').innerHTML = "Nada...";
    }
}*/

/*function calcular() {
  var resultado = document.getElementById('resultado').innerHTML;
  
  if (resultado) {
      var evalResult = eval(resultado);
      var numeroFormatado = parseFloat(evalResult).toFixed(1); // Limita para 3 casas decimais
      
      // Obtém a data e a hora atual
      var dataHoraAtual = new Date();
      var dataHoraFormatada = dataHoraAtual.toLocaleString();
      
      // Cria uma entrada para o histórico
      var historicoItem = dataHoraFormatada + ": " + resultado + " = " + numeroFormatado;
      
      // Adiciona a entrada ao histórico
      var historicoLista = document.getElementById('historico-lista');
      var novoItemHistorico = document.createElement('li');
      novoItemHistorico.textContent = historicoItem;
      historicoLista.appendChild(novoItemHistorico);
      
      // Atualiza o resultado na área de resultado
      document.getElementById('resultado').innerHTML = numeroFormatado;
  } else {
      document.getElementById('resultado').innerHTML = "Nada...";
  }
}*/

function calcular() {
  var resultado = document.getElementById('resultado').innerHTML;
  
  if (resultado) {
      var evalResult = eval(resultado);
      var numeroFormatado = parseFloat(evalResult).toFixed(1); // Limita para 1 casas decimais
      
      // Obtém a data e a hora atual
      var dataHoraAtual = new Date();
      var dataHoraFormatada = dataHoraAtual.toLocaleString();
      
      // Cria uma entrada para o histórico
      var historicoItem = dataHoraFormatada + ": " + resultado + " = " + numeroFormatado;
      
      // Obtém a lista de histórico e verifica o número de itens
      var historicoLista = document.getElementById('historico-lista');
      var historicoItens = historicoLista.getElementsByTagName('li');
      
      // Se já houver 4 itens, remova o primeiro
      if (historicoItens.length >= 4) {
          historicoLista.removeChild(historicoItens[0]);
      }
      
      // Adiciona a nova entrada ao histórico
      var novoItemHistorico = document.createElement('li');
      novoItemHistorico.textContent = historicoItem;
      historicoLista.appendChild(novoItemHistorico);
      
      // Atualiza o resultado na área de resultado
      document.getElementById('resultado').innerHTML = numeroFormatado;
  } else {
      document.getElementById('resultado').innerHTML = "Nada...";
  }
}


