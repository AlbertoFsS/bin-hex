
var pregunta=prompt("Elige 1 para binario 2 para hexadecimal");
var opcion=parseInt(pregunta);
var usuario= prompt("Elige El numero que deseas Convertir");

cambio();



function cambio(){
    if(opcion==1){
        var numeroAConvertirBin=parseInt(usuario);
        var numeroConvertido= numeroAConvertirBin.toString(2);

      document.write('<h1 style="text-align: center;">'+ numeroAConvertirBin + "\n"+" = "  + numeroConvertido + '</h1>');
    }else if(opcion==2){
        var numeroAConvertirHex=parseInt(usuario);
        var numeroConvertido= numeroAConvertirHex.toString(16);
        document.write('<h1 style="text-align: center;">'+ numeroAConvertirHex+ "\n"+" = "  + numeroConvertido +'</h1>');

    }else{
        document.write("No esta esa opcion");
    }
}

