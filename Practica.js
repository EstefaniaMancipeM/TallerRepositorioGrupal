cliente.ciudad = "Cali";     // agrega una nueva clave

console.log(cliente);        // { nombre: 'Andrés', edad: 30, ciudad: 'Cali' }

cliente.edad = 31;           // cambia un valor existente

console.log(cliente);        // { nombre: 'Andrés', edad: 31, ciudad: 'Cali' }

delete cliente.edad;         // elimina una clave


