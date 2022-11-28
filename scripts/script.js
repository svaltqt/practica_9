$(document).ready(function()
        { 
            cont=0;
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
                
                
                // generar num aleatorio no repetido
                if(seguir != true){
                               
                    var nums = [1,2,3,4,5,6,7,8,9,10],
                        i = nums.length,
                        j = 0;
                    let ranNums = [];
                    while (i--) {
                        j = getRandom(1, 10);  
                        ranNums.push(""+nums[j]);
                        nums.splice(j,1);   
                    }
                }

                
                
               
                
                
                // Generar  de género
                function randomgen(){
                    numrandom = getRandom(1, 2);                     
                    var dict = {
                        1: "Hombre",
                        2: "Mujer"                    
                    };
                    if (numrandom == 1){return dict[1];}
                    else if (numrandom == 2){return dict[2];}                   
                }var genero = randomgen();



                // Generar edad
                edad = numrandom = getRandom(1, 40);                 

               
                // Mostrar datos en html
                if (cont<10){
                    
                    var add = "<tr>"
                    add+="<td>"+ranNums[cont]+"</td>"
                    add+="<td>"+genero+"</td>"
                    add+="<td>"+edad+"</td>"
                    add+="<tr>"                
                    cont++;
                }else if(cont==10){
                    // deshabilitar botton
                    $('#agregar').prop('disabled', true);
                }
                
                          
                           

                $("tbody").append(add);
            });
        });

