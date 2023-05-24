
function Encriptar(){
    var txtFrase=document.getElementById("txtFrase");
    var texto=txtFrase.value;
    var resultado=""; 
    for (let i = 0; i < texto.length; i++) {
        if (texto[i]=="a") {
            resultado=resultado+"ai";
        }else if (texto[i]=="e") {
            resultado=resultado+"enter";
        }
        else if (texto[i]=="i") {
            resultado=resultado+"imes";
        }
        else if (texto[i]=="o") {
            resultado=resultado+"ober";
        }
        else if (texto[i]=="u") {
            resultado=resultado+"ufat";
        }else{
            resultado=resultado+texto[i];
        }
        
    } 
    document.getElementById("txtRes").innerHTML=resultado;
    document.getElementById("figMuñeco").style.visibility="hidden";
    document.getElementById("txtSincontenido").style.visibility="hidden";
    var btnCopiar=document.getElementById("btnCopiar");
    btnCopiar.innerHTML="Copiar"
    txtFrase.value="";
}

function Desencriptar(){
    var txtFrase=document.getElementById("txtFrase");
    var texto=txtFrase.value;
    var resultado=""; 
    for (let i = 0; i < texto.length; i++) { //recorrer la oración 
        if (texto[i]=="a") {//en caso de que la letra en la posicion i sea "a" se salta 1 letra
            resultado=resultado+texto[i];
            i+=1;
        }else if (texto[i]=="e") {//en caso de que la letra en la posicion i sea "e" se salta 4 letras
            resultado=resultado+texto[i];
            i+=4;
        }
        else if (texto[i]=="i" || texto[i]=="o" || texto[i]=="u") {//en caso de que la letra en la posicion i sea "i, o, u" se salta 3 letras
            resultado=resultado+texto[i];
            i+=3;
        }
        else{
            resultado=resultado+texto[i];
        }
        
    } 
    
    document.getElementById("txtRes").innerHTML=resultado;
    document.getElementById("figMuñeco").style.visibility="hidden";
    document.getElementById("txtSincontenido").style.visibility="hidden";
    var btnCopiar=document.getElementById("btnCopiar");
    btnCopiar.innerHTML="Copiar";
    txtFrase.value="";
}
function Copiar (){
    var txtFrase=document.getElementById("txtRes");
    var texto=txtFrase.innerHTML;
    var btnCopiar=document.getElementById("btnCopiar");
    btnCopiar.innerHTML="¡Copiado!"
    navigator.clipboard.writeText(texto);

}