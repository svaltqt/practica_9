$(document).ready(function()
        { 
            
            $("#agregar").click(function()
            {  
                // Funcion generar numero random con dos args
                function getRandom(min, max) {
                    var x = Math.random()*(max - min)+min;               
                    var random = Math.round(x);  
                    return random;
}
                /**Nombre: palabra "Usuario" concatenado con un valor aleatorio entre 1 y 10. 
                Este nombre no se repetirá dentro de la tabla. */
                
                numrandom = getRandom(1, 10); 
                var name = "user"+ numrandom;  
                
                // Creacion de género

                function randomgen(){
                    numrandom = getRandom(1, 2);                     
                    var dict = {
                        1: "Hombre",
                        2: "Mujer"                    
                    };
                    if (numrandom == 1){return dict[1];}
                    else if (numrandom == 2){return dict[2];}                   
                }genero = randomgen();
               

                
    
                
                // Mostrar datos en html
                var add = "<tr>"
                add+="<td>"+name+"</td>"
                add+="<td>"+genero+"</td>"
                add+="<td>"+"</td>"
                add+="<tr>"            
                           

                $("tbody").append(add);
            });
        });

