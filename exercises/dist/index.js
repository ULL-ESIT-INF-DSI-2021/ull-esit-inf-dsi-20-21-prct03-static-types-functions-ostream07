//console.log("Hola mundo");
function Chuck_Norris(punch) {
    var without_a = "";
    var without_e = "";
    var range = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    var range_size = range.length;
    without_a = punch.replace(delete_a, '');
    without_e = without_a.replace(delete_e, '');
    var compare = "";
    var by_order = "";
    var concat = "";
    var size = without_e.length;
    //console.log(without_e);
    for (var i = 0; i < size; i++) {
        for (var j = 0; j < range_size; j++) {
            if (without_e.charAt(i) == range.charAt(j)) {
                compare = range.charAt(j);
                if (compare.match(range)) {
                    var hola = compare.indexOf(range);
                }
                console.log(hola);
            }
        }
    }
}
var punch = "Beard Jeans Hairbrush Knuckleduster Sand";
var delete_a = /a/g;
var delete_e = /e/g;
//var resultado = punch.replace(delete_a, '');
//console.log(resultado);
Chuck_Norris(punch);
