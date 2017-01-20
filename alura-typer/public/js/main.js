var frase = $(".frase").text();
var numPalavras = frase.split(" ").length;

var tamanhoFrase = $("#tamanho-frase");
tamanhoFrase.text(numPalavras);
var campo = $(".campo-digitacao");
var tempoRestante = $("#tempo-digitacao").text();

campo.one("focus",function(){
  console.log("foquei");
  var cronometroID = setInterval(function(){
      tempoRestante--;
      $("#tempo-digitacao").text(tempoRestante);
      if(tempoRestante < 1){
        $(".campo-digitacao").attr("disabled", true);
        clearInterval(cronometroID);
      }
  },1000);
});

campo.on("input", function(){
  var conteudo = campo.val();
  var qtdPalavras = conteudo.split(/\S+/).length -1;
  $("#contador-palavras").text(qtdPalavras);
  var qtdCaracteres = conteudo.length;
  $("#contador-caracteres").text(qtdCaracteres);
});
