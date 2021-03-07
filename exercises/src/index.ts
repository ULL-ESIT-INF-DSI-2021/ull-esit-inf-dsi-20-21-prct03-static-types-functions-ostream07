//console.log("Hola mundo");
function ipsInRange(ip1, ip2) {
  var arr = ip1.split(".");
  for(var i: number = 0; i < ip1.length; i++) {
    console.log(arr(i));
  }
}

var ip1: string = "10.0.0.0";
var ip2: string = "10.0.0.50";

ipsInRange(ip1, ip2);