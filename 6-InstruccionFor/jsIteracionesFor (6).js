function Mostrar()
{

var numero;
numero=prompt("ingrese un numero");
var contadoresPares=0;

    for(var i=1;i<=numero ;i++){

        if(i%2==0)
        {
            console.log(i);
            contadoresPares++;
        }

    }
    console.log("cantidad de pares "+contadoresPares);


}//FIN DE LA FUNCIÓN