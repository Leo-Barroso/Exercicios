var vendedor = "Leonardo";
var salFixo = "1700";
var vendas = "1230.50";
var comissao = "0.15";

var salario = parseFloat(vendas) * parseFloat(comissao) + parseFloat(salFixo);
console.log("TOTAL = R$ " + parseFloat(salario).toFixed(2));
