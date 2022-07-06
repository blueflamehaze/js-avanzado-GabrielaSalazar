// Importamos el módulo de donde quiera que esté y lo guardamos en la variable os
const os = require("os");

console.log(os.version()); // Muestra nuestra versión del kernel
console.log(os.arch()); //Se obtiene la arquitectura (x64 o x86(x32))
console.log(os.cpus()); // Da información acerca de los cpus
console.log(os.freemem()); // Da la memoria libre que no queda en bytes
console.log(os.homedir()); // Carpeta del usuario actual
console.log(os.hostname()); // Mi dirección ip (local)
console.log(os.platform()); // Versión del sistema operativo
console.log(os.version());
