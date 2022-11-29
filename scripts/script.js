$(document).ready(function()
        { 
            cont=0;
            var flag = new Boolean(false);

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
                                              
                      
                            
                const aleatorios = []; 
                function dropUnicos(){
                    Narray = [1,2,3,4,5,6,7,8,9,10];                     
                    var num = getRandom(1, 2);                    

                    for(var i=0;i<Narray.length; i++)
                    {
                        if(num ==Narray[i] ){
                        aleatorios.push("Otro"+Narray[i])
                        }else{
                        aleatorios.push("Usuario"+Narray[i])
                        }
                        

                    }
                    return "listo";
            }
            var test = dropUnicos()
         
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
                edad = getRandom(1, 40);                 

               
                // Mostrar datos en html
                if (cont<10){
                    flag = true;
                    
                    var add = "<tr>"
                    add+="<td>"+aleatorios[cont]+"</td>"
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

