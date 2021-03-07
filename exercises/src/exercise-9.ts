function pokemonFight(tipo1, tipo2) {
    var efectividad_tipo1: number = 1;
    var efectividad_tipo2: number = 1;
  
    if(tipo1 == "Agua" && tipo2 == "Fuego" || tipo1 == "Fuego" && tipo2 == "Hierba" || 
                                tipo1 == "Hierba" && tipo2 == "Agua" || tipo1 == "Electrico" && tipo2 == "Agua") {
      efectividad_tipo1 = efectividad_tipo1 * 2;
      efectividad_tipo2 = efectividad_tipo2 * 0.5;
    } else if (tipo1 == "Fuego" && tipo2 == "Electrico" || tipo1 == "Electrico" && tipo2 == "Fuego" ||
                                tipo1 == "Hierba" && tipo2 == "Electrico" || tipo1 == "Electrico" && tipo2 == "Hierba") {
      efectividad_tipo1 = efectividad_tipo1 * 1;
      efectividad_tipo2 = efectividad_tipo2 * 1;
      } else if (tipo1 == "Fuego" && tipo2 == "Agua" || tipo1 == "Hierba" && tipo2 == "Fuego" || 
                                tipo1 == "Agua" && tipo2 == "Hierba" || tipo1 == "Agua" && tipo2 == "Electrico"){
        efectividad_tipo1 = efectividad_tipo1 * 0.5
        efectividad_tipo2 = efectividad_tipo2 * 2;
      } else {
        efectividad_tipo1 = efectividad_tipo1 * 0.5;
        efectividad_tipo2 = efectividad_tipo2 * 0.5;
      }
      daño_pokemon1 = 50 * (ataque_pokemon1 / defensa_pokemon1) * efectividad_tipo1;
      daño_pokemon2 = 50 * (ataque_pokemon2 / defensa_pokemon2) * efectividad_tipo2;
      console.log("El ataque del tipo " + tipo1 + " causa al pokemon tipo " + tipo2 + " " + daño_pokemon1.toFixed(2) + " de daño");
      console.log("El ataque del tipo " + tipo2 + " causa al pokemon tipo " + tipo1 + " " + daño_pokemon2.toFixed(2) + " de daño");
  }
  
  
  var tipo1: string = "Agua";
  var tipo2: string = "Fuego";
  var tipo3: string = "Electrico";
  var tipo4: string = "Hierba";
  var ataque_pokemon1: number = 180;
  var defensa_pokemon1: number = 204;
  var ataque_pokemon2: number = 160;
  var defensa_pokemon2: number = 204;
  var daño_pokemon1: number = 0;
  var daño_pokemon2: number = 0;
  
  console.log("");
  console.log("Entrenador1: Elijo un pokemon tipo: " + tipo3);
  console.log("Entrenador2: Pues yo a un pokemon tipo: " + tipo2);
  console.log("");
  console.log("********************");
  console.log("*     Battle!!     *");
  console.log("********************");
  console.log("");
  pokemonFight(tipo3, tipo2);