// Task 3: addUser(first_name, last_name, email)
export async function getNextUserId() {
  const respuesta = await fetch("http://localhost:3000/users");
  const users = await respuesta.json();
    //esta funcion va pasando por cada id y si es mas grande lo guarda en max
  const maxId = users.reduce(
    (max, user) => Math.max(max, Number(user.id)),
    0
  );
  //sumamos uno al maximo para usarlo al crear un nuevo usuario
  return maxId + 1;
}

export async function addUser(first_name, last_name, email){
    const nextId = await getNextUserId();
    const response =await fetch('http://localhost:3000/users',{
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            //si no mandamos como string no encontrara users/id porque los pasaria como numero no texto
            id: String(nextId),
            first_name: first_name,
            last_name: last_name,
            email: email
        }),
    });
}
