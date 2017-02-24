function Mostrar()
{
var numero;
numero=prompt("ingrese un numero");
var divisoresEncontrados=0;       // ESTO ES UN CONTADOR
    for(var i=1 ;i<= numero ;i++)
    {
        if(numero%i==0)
        {

            console.log(i);
            divisoresEncontrados++;
        }



    }
    alert("divisores Encontrados " + divisoresEncontrados);

}//FIN DE LA FUNCIÓN