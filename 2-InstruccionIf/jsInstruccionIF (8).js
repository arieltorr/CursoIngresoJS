function Mostrar()
{
//tomo la edad  
var edad;
edad=document.getElementById("edad").value;
edad=parseInt(edad);
var ecivil;
ecivil=document.getElementById("estadoCivil").value;
    if(edad>=18 && ecivil == "Soltero"){

        alert("es soltero y no es menor");

    }
	


}//FIN DE LA FUNCIÓN