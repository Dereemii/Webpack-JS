import "./two";
import "./three"; 

let numeros = [1, 4, 23, -4, 'one', 6, 0, 1.1, 3.1415, ];

const  es_Mayor_a_Ocho = (array_numeros) => {
    let nuevoArray = []; 

    for(var i = 0; i < array_numeros.length; i++){
        if(typeof array_numeros [i] == "number") {
           var numeros_por_4 = array_numeros[i]*4       
           if(numeros_por_4 > 8){
            nuevoArray.push(numeros_por_4)
           }
        }
    } 
    return nuevoArray
};


console.log(es_Mayor_a_Ocho(numeros))
