function invertirCadena (cadena) {
	var posicion = cadena.length - 1;
	var nuevaCadena = "";
	while (posicion >= 0) {
		nuevaCadena += cadena.charAt(posicion);
		posicion--;
	}
	alert("La oracion invertida es:" + nuevaCadena);
	alert("La letra e aparece " + (cadena.split("e").length - 1) + " veces.");
}

invertirCadena(prompt("Introduce la frase que invertire."));
