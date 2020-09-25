var codProd1 = "12";
var quantProd1 = "1";
var valorProd1 = "15.10";

var codProd2 = "16";
var quantProd2 = "1";
var valorProd2 = "15.10";

var resultado =
  parseInt(quantProd1) * parseFloat(valorProd1).toFixed(2) +
  parseInt(quantProd2) * parseFloat(valorProd2).toFixed(2);
console.log("Valor a pagar: R$ " + parseFloat(resultado).toFixed(2));
