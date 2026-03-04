import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";
import { users } from "./bases/01-intro";
import { userClass } from "./bases/03-clases.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
     <h2>${users[1].nombre}</h2>
      <h2>${userClass.nombre} : ${userClass.edad}</h2>
      <h2>${userClass.imageUrl}</h2>
      <h2>${userClass.saludar()}</h2>
      
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
   
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
