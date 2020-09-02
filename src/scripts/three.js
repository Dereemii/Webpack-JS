import  es_Mayor_a_Ocho  from "./one";
import convierte_objeto_a_json from "./two";

const invocador_de_funciones = () =>{
    return {
        status: "Ok",
        resultOne: es_Mayor_a_Ocho(),
        resultTwo: convierte_objeto_a_json(),
    }
}

console.log(invocador_de_funciones()) 