// import { PI, PI2 } from "./index3.js";

async function loadModule() {
  const module = await import("./index3.js");
  console.log(module.PI);
  console.log(module.PI2); // Доступ к именованному экспорту
}
loadModule()