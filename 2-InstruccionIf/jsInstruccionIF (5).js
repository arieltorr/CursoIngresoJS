function Mostrar()
{
//tomo la edad  
var edad;
edad= document.getElementById("edad").value;
edad= parseInt(edad);
    if(edad>=18 || edad<13){
        alert("la persona no es adolescente");

    }



}//FIN DE LA FUNCIÓN