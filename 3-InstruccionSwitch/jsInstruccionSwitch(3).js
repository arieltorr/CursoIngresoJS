function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	switch (mesDelAño)
     {
        case "Febrero":
        alert("este mes no tiene más de 29 dias");
            
            break;

        case "Marzo":
        case "Abril":
        case "Mayo":
        case "Junio":
        case "Julio":
        case "Agosto":
        case "Septiembre":
        case "Octubre":
        case "Noviembre":
        case "Diciembre":
        case "Enero":
        alert("Este mes tiene 30 o más dias!!")
            break;
        default:
            break;
    }
	


}//FIN DE LA FUNCIÓN