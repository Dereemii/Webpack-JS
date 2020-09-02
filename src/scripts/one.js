let numeros = [1, 4, 23, -4, 'one', 6, 0, 1.1, 3.1415, 70];


const  es_Mayor_a_Ocho = (array_numeros) => {
    let nuevoArray = []; //almacena array vacío

    for(i = 0; i < array_numeros.length; i++){
        if(typeof array_numeros [i] == "number") {
           // console.log(array_numeros[i])
            if(array_numeros[i] > 8){
                //console.log(array_numeros[i])
                nuevoArray.push(array_numeros[i])
            }
        }
    } 
    return nuevoArray
};
console.log(es_Mayor_a_Ocho(numeros))

