$(document).ready(function()
        { 
            cont=0;
            cont2=0;  
            var numarray = [0,0,0,0,0,0,0,0,0,0];  
    
            function recorrecVector(num){
            
                for(i=0;i<10;i++)
                {
                    if(numarray[i] == num ){
                        return 1;
                    }                                
                }
                return 0;
            }

            $("#agregar").click(function()
            {  
                // Funcion generar numero random no repetido
                function getRandom(min, max) {
                    var x = Math.random()*(max - min)+min;               
                    var random = Math.round(x);  
                    return random;
                }              
                numerosaletorios = getRandom(1,10); //2

                while(recorrecVector(numerosaletorios)==1){
                    alert(numerosaletorios);
                    numerosaletorios = getRandom(1,10);

                }numarray[cont] = numerosaletorios

                /**Nombre: palabra "Usuario" concatenado con un valor aleatorio entre 1 y 10. 
                Este nombre no se repetirá dentro de la tabla. */
      

                //var numeros = 10;
                // Generar  de género
                function randomgen(){
                    numrandom = getRandom(1, 2);                     
                    var dict = {
                        1: "Hombre",
                        2: "Mujer"                    
                    };
                    if (numrandom == 1){return dict[1];}
                    else if (numrandom == 2){return dict[2];}                   
                }
                genero = randomgen();



                // Generar edad
                edad = getRandom(1, 40);                 

               
                // Mostrar datos en html
                if (cont2<10){
                                        
                    var add = "<tr>"
                    add+="<td>"+"Usuario"+numarray[cont]+"</td>"
                    add+="<td>"+genero+"</td>"
                    add+="<td>"+edad+"</td>"
                    add+="<tr>"                
                    cont2++;
                }else if(cont2==10){
                    // deshabilitar botton
                    $('#agregar').prop('disabled', true);
                }
             
                $("tbody").append(add);
            });
        });    

        