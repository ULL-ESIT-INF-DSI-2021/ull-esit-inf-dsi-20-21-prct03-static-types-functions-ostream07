function onePunch(punch) {
  return punch == "" ? "Broken" : punch.replace(/[ae]/g, "").split(" ").sort().join(" ");
}

var punch: string;
console.log(onePunch("Beard Jeans Hairbrush Knuckleduster Sand"));
console.log(onePunch("Sock Beard Vest Lady Sage"));
console.log(onePunch("Beard Sack Gun Parachute Face-Kicking-Shoes"));
console.log(onePunch("Snot Snow Soda Tank Beard"));
console.log(onePunch(""));