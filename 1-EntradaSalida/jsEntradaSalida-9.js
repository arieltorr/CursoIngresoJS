/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
var importe;
importe= document.getElementById("sueldo").value;
importe= parseInt(importe);
var resultado;
resultado=importe*1.1;
resultado= parseInt(resultado);
document.getElementById("resultado").value= resultado;
	
}
