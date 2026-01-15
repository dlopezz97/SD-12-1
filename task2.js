// Task 2: listUsers()
export function listUsers(){
    const usuarios=fetch('http://localhost:3000/users')
    .then(respuesta=>respuesta.json())
    .then(datos => console.log(datos))
    .catch(error=>{
        console.log("Error while fetching")
    })
}
