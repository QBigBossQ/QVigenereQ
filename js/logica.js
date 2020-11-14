function cifrar(){
    var alfab =27;
    var texto=(document.getElementById('texto').value).toLowerCase();
    var txt = texto.length;
    var clave =(document.getElementById('clave').value).toLowerCase();
    var cClave=0;
    
    
    var arrayabc = new Array();
    var contEs =0;
    for(var i=0; i<alfab; i++){
        if(i==14){
          
          arrayabc[i]= String.fromCharCode(241);
        
        }
        else{
          
          arrayabc[i]=String.fromCharCode(97+contEs);
          contEs++;

        }
        
    }

    var vClave =new Array();
    var tamClave = clave.length;
    var contaClave=0;
    
    for(var i=0;i<tamClave; i++){
        for (var j=0; j <alfab; j++) {
            if(clave[i]==arrayabc[j]) {
                
                vClave[contaClave]=j;
                contaClave++;

            }   
        }

    }
    
    var vTxt =new Array();
    for (var i = 0; i < txt; i++) {
        for (var j = 0; j < alfab; j++) {
            if(texto[i]==" "){
                
                vTxt[i]=" ";

            }
            else if(texto[i]==arrayabc[j]){
                
                vTxt[i]=j;

            }
          
        }

    }

    
    var txtCifrado= new Array();
    for(var i=0;i<txt;i++){
        
        if(validar(texto[i], alfab,arrayabc)){

            txtCifrado[i]=arrayabc[(vTxt[i]+vClave[cClave])%alfab];
            cClave++; 

        }
        else{

            txtCifrado[i]=texto[i];

        }

        if(cClave==(vClave.length)){

            cClave=0;

        }
    }
    
    div = document.getElementById("resultado");
    var cres = "";
    for(var i = 0; i < txt; i++){
        
        cres += txtCifrado[i];

    }
    div.textContent = cres;

}

function descifrar(){
    //variables
    var alfab =27;
    var texto=(document.getElementById('texto').value).toLowerCase();
    var txt = texto.length;
    var clave =(document.getElementById('clave').value).toLowerCase();
    var cClave=0;
    
    
    var arrayabc = new Array();
    var contEs =0;
    for(var i=0; i<alfab; i++){
        if(i==14){

            arrayabc[i]= String.fromCharCode(241);

        }
        else{

            arrayabc[i]=String.fromCharCode(97+contEs);
            contEs++;

        }
    }

    
    var vClave =new Array();
    var tamClave = clave.length;
    var contaClave=0;
    for(var i=0;i<tamClave; i++){
        for (var j=0; j <alfab; j++) {
            if(clave[i]==arrayabc[j]) {

                vClave[contaClave]=j;
                contaClave++;
            }   
        }
        

    }
   
    var vTxt =new Array();
    for (var i = 0; i < txt; i++) {
        for (var j = 0; j < alfab; j++) {
            if(texto[i]==" "){
                
                vTxt[i]=" ";

            }
            else if(texto[i]==arrayabc[j]){
                
                vTxt[i]=j;
            }
          
        }

    }

    
    var txtCifrado= new Array();
    for(var i=0;i<txt;i++){
      
        if(validar(texto[i], alfab,arrayabc) && (vTxt[i]-vClave[cClave])>=0){
            
            txtCifrado[i]=arrayabc[(vTxt[i]-vClave[cClave])%alfab];
            cClave++;

        }
        else if (validar(texto[i], alfab,arrayabc) && (vTxt[i]-vClave[cClave])<0) {
            
            txtCifrado[i]=arrayabc[(vTxt[i]-vClave[cClave]+alfab)%alfab];
            cClave++;

        }
        else{
            
            txtCifrado[i]=texto[i];

        }
        if(cClave==vClave.length){
            
            cClave=0;

        }
    }
    
    
    div = document.getElementById("resultado");
    var cres = "";
    for(var i = 0; i < txt; i++){
        cres += txtCifrado[i];
    }
    div.textContent = cres;

}
function cifrado(){
    var opc = document.getElementsByName('opc');
    
    if(opc[0].checked){
      
      cifrar();
      
    }
    else if(opc[1].checked){
      
      descifrar();
      
    }
}
function validar(caracter, tamAlfa,alfabeto){
    for (var i = 0; i <tamAlfa; i++) {
        if(caracter==alfabeto[i]){
            
            return true; 
        }
    }
    return false;

}


function validarn(e){
  
  var entrada = (document.all)?e.keyCode:e.which;
  if (entrada == 8) return true;
  var mod = /([a-zA-Z\u00f1\u00d1\s])/;
  var tec = String.fromCharCode(entrada);
  return mod.test(tec); 
}