function Mostrar()
{
//tomo la edad  
var edad;
edad =document.getElementById("edad").value;
edad=parseInt(edad);
var ecivil;
ecivil=document.getElementById("estadoCivil").value;
    if(edad<18 && ecivil!= "Soltero"){
        alert("es muy pequeño para ser soltero");


    }

	


}//FIN DE LA FUNCIÓN