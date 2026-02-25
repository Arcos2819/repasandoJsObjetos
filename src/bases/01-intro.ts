// formas de tipar los objetos o datos
interface Usuario {
  //funciona herencias y extenciones para front y backend
  nombre: string;
  edad: number;
  telefono?: string;
  activo: boolean;
}
// type Usuarios { 
       //funciona uniones para front y backend
//     nombre: string;
//     edad: number;
//     telefono?:string;
//     activo: boolean

// }

//manera de definir un objeto sin usar interfaces o types
// export const usuario:{nombre: string, edad: number, activo: boolean} = {
//     nombre: "Emiliano",
//     edad: 18,
//     activo: true
// };

export const usuario: Usuario = {
  nombre: "Emiliano",
  edad: 18,
  activo: true,
};

export const diego: Usuario = {
  nombre: "Diego",
  edad: 30,
  activo: true,
};

// Arrai que se llame user
export const users: Usuario[] = [];
users.push(usuario, diego);
console.log(users);
// users.join()
