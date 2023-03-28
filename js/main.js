function promedioNotas () {
    var nota1=0;    var nota2=0;
    var nota3=0;    var nota4=0;
    var nota5=0;    var nota6=0;
    var nota7=0;    var promedio=0;


        nota1= parseInt(prompt("Por favor ingrese la primera calificacion obtenida: "));
        nota2= parseInt(prompt("Por favor ingrese la segunda calificacion obtenida: "));
        nota3= parseInt(prompt("Por favor ingrese la tercera calificacion obtenida: "));
        nota4= parseInt(prompt("Por favor ingrese la cuarta calificacion obtenida: "));
        nota5= parseInt(prompt("Por favor ingrese la quinta calificacion obtenida: "));
        nota6= parseInt(prompt("Por favor ingrese la sexta calificacion obtenida: "));
        nota7= parseInt(prompt("Por favor ingrese la septima calificacion obtenida: "));

        promedio = nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7 / 7;

        alert("El promedio obtenido es de: "+promedio);
            if(promedio>6.1){
                alert("Aprobado");
            }
            else{
                alert("Reprobado");
            }
}


function inversionCapital(){
    var capital =0;
    var ganancia =0;
    var año =0;
    var total =0;

        capital =parseInt(prompt("Por favor ingrese la capital:  "));
        año =parseInt(prompt("Ingrese por favor el año:  "));
        ganancia = (capital*0,204)*año;
        total = capital+ganancia;

        alert("La ganancia es de:  "+ganancia);
        alert("Usted recibio un total de:  ");

}


function mayor(){
    var a=0;    var b=0;

        a =parseInt(prompt("Por favor ingrese el primer valor:  "));
        b =parseInt(prompt("Por favor ingrese el segundo valor:  "));
            if(a==b){
                alert("Los numeros ingresados son iguales")
            }
            else{
                if(a>b){
                    alert("El numero mayor es: "+a);
                }
                else{
                    alert("El numero mayor es: "+b);
                }
            }
}


function menor(){
    var a = 0;      var b = 0;      var c = 0;      var menor = 0;
    a = parseInt(prompt("Ingrese por favor el primer valor:  "));
    b = parseInt(prompt("Ingrese por favor el segundo valor:  "));
    c = parseInt(prompt("Ingrese por favor el tercer valor:  "));

        if (a<=b && a<=c){
            menor = a;
        }else if(b<=a && b<=c){
            menor = b;
        }else{
            menor = c;
        }
        alert("El numero menor es:   "+menor);
    
}

function triangulo(){
            var base =0;
            var altura =0;
            var area =0;

                base =parseInt(prompt("Por favor ingrese la base del triangulo:  "));
                altura =parseInt(prompt("Por favor ingrese la altura del triangulo:  "));
                area = (base*altura)/2;
                alert("El area del triangulo es:  "+area);
        }
        
function fechaNacimiento(){
            var edad=0; var anioNacimiento=0;
            var anioActual=0;

                edad=parseInt(prompt("Ingrese la edad porfavor:  "));
                anioActual=parseInt(prompt("Ingrese el año actual porfavor:  "));
                anioNacimiento =((anioActual-edad)-1);
                alert ("Su año de nacimiento es el:  "+anioNacimiento)
        }

 function operacionesBasicas(){

    var a=0;    var b=0;    var suma=0;
    var resta=0;  var multiplicacion=0;     var division=0;

        a = parseInt(prompt("Ingrese el primer valor:  "));
        b = parseInt(prompt("Ingrese el primer valor:  "));

            suma = a + b;
            resta = a - b;
            multiplicacion = a * b;
            division = a / b;

        alert("La suma de los valores es:  "+suma);
        alert("La resta de los valores es:  "+resta);
        alert("La multiplicacion de los valores es:  "+multiplicacion);
        alert("La division de los valores es:  "+division);

 }
 // figura
        function circulo(){
            var figura = document.getElementById("figura");
            figura.classList.toggle ("circulo");

        }

        function rectangulo(){
            var figura = document.getElementById("figura");
            figura.classList.toggle ("rectangulo");

        }

        function rombo(){
            var figura = document.getElementById("figura");
            figura.classList.toggle ("rombo");

        }

         function gif(){
            var figura = document.getElementById("figura");
            figura.classList.toggle ("gif");

        }

        function izquierda(){
            var figura = document.getElementById("figura");
            figura.classList.toggle ("izquierda");

        }

        function derecha(){
            var figura = document.getElementById("figura");
            figura.classList.toggle ("derecha");

        }

        function arriba(){
            var figura = document.getElementById("figura");
            figura.classList.toggle ("arriba");

        } 
        
        function abajo(){
            var figura = document.getElementById("figura");
            figura.classList.toggle ("abajo");

        }

        function diagonal(){
            var figura = document.getElementById("figura");
            figura.classList.toggle ("diagonal");

        }