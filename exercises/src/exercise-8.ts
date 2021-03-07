function ipsInRange(ip1, ip2) {
  var solution1 = new Array();
  solution1 = ip1.split(".");
  var solution2 = new Array();
  solution2 = ip2.split(".");
  var result: number = 0;
  var value: number = 0;
  for(var i: number = 0; i < solution1.length; i++) {
    if(i == solution1.length - 1) {
      result = solution2[i] - solution1[i];
    }
    if(i == solution1.length -2 && solution1[i] != 0) {
      value = parseInt(solution1[i]);
      value = value + 255;
    }
  }
  var final_result: number = 0;
  final_result = value - result;
  console.log("Ips disponibles: " + final_result);
}
var ip1: string = "10.0.3.0";
var ip2: string = "10.0.0.50";

console.log("La ip1 debe ser la mayor para realizar la resta");
console.log("Valor Ip1: " + ip1);
console.log("Valor Ip2: " + ip2);
console.log("**********************");
ipsInRange(ip1, ip2);