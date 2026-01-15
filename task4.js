// Task 4: delUser(number)
export function delUser(number){
    fetch(`http://localhost:3000/users/${number}`, {
    method: 'DELETE',
    }).then(respuesta => respuesta.json())
    .then(datos => console.log(datos))
}
