function Mostrar()
{
//tomo la edad  
var laHora = document.getElementById('hora').value;  //acá es string
laHora= parseInt (laHora) // esto es number ! (pensalo asi ariel)
    switch (laHora)
     {
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        alert("es de mañana");
                    
            break;
    
        default:
            break;
    }
//alert (laHora);
	
	



}//FIN DE LA FUNCIÓN