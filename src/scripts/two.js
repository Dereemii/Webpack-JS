let mascota = {nombre: "Rosalina", edad:5, raza: "Yorkshire", pelo: "negro"}

const convierte_objeto_a_json = (objeto) =>{
    return JSON.stringify(objeto);
}
console.log(mascota); //retorna objeto
console.log(convierte_objeto_a_json(mascota)); //retorna objeto convertido