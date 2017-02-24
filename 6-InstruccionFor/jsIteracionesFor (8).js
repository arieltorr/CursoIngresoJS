function Mostrar()
{
var numero;
numero=prompt("ingrese un numero");
var contador=0;

    for(var i=1 ;i<=numero ;i++)
    {
        if(numero%i ==0)
         {
             contador++;
         }
   
         if(contador>2)
         {
             break;
         }

    }
        
        if(contador<=2)
        {
        alert("es divisible")

        }
                    //revisar que me quedo mal ! 
}//FIN DE LA FUNCIÓN