#Ejercicio : "JS y Webpack"



#### Configurar un entorno de compilación y building del proyecto en cuestión.

#### Crear archivos .js one, two, three, deben tener código JS con las siguientes funciones:
  - **One.js** Debe contener una función que tome todos los elementos de un arreglo, multiploque por 4 cada uno de los elementos y luego filtre por los elementos que sean mayores a 8. Retornando todos los elementos mayores o iguales a 8 luego de aplicar la función. Use el siguiente arreglo de ejemplo: 

```
[1, 4, 23, -4, 'one', 6, 0, 1.1, 3.1415]
```
 - **Two.js** Debe contener una función que convierta un objeto en formato JSON a string, retornando el objeto o bien una excepción de error si no pudo ser procesado.

 - **Three.js** Debe contener una función que invoque las funciones presentes en one y two.Debe retornar sus resultados en un objeto con la siguiente estructura:
```
    {
    "status": "OK",
    "one": resultOne,
    "two": resultTwo
    }
```
Donde resultOne y resultTwo son los resultados de ambas funciones. Se debe trabajar con formato ES6+.

#### Transpilar dicho código con la configuración del paso 1 para generar un archivo build que pueda ser referenciado por un HTML para luego, ser leído por cualquier navegador.