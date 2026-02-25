//1-Usando tipo[]
// let numeros: number[] = [1, 2, 3, 4, 5];
// let nombres: string[] = ["Emiliano", "Diego", "Juan"];

//2-Usando Array<tipo>
// let numeros: Array<number> = [1, 2, 3, 4, 5];
// let nombres: Array<string> = ["Emiliano", "Diego", "Juan"];

//Arreglos multiples tipos (union)
//Puedes permitir que el arreglo contenga diferentes tipos con uniones (|)
//const mezcla: (number | string)[] = [1, "Hola", 2, "Mundo"];

//Arreglos de objetos
interface Usuario {
  nombre: string;
  edad: number;
}

let usuarios: Usuario[] = [
  { nombre: "Emiliano", edad: 18 },
  { nombre: "Diego", edad: 30 },
];
console.log(usuarios);
