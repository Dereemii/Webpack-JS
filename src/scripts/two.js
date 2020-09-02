export const convierte_objeto_a_json = () => {
  let objeto = {
    nombre: "Rosalina",
    edad: 5,
    raza: "Yorkshire",
    pelo: "negro",
  };
  let myJson=JSON.stringify(objeto)
    return myJson
};

export default convierte_objeto_a_json;



/* console.log(mascota); //retorna objeto
console.log(convierte_objeto_a_json(mascota)); //retorna objeto convertido */
