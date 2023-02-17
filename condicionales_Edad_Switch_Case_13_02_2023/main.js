let edad = Number(prompt(`Vamos a validar si eres mayor de edad\n\t\tIngresa tu edad`));
switch (true) {
    case edad>=18:
        console.log(`Es mayor de edad.`);
        break;

    default:
        console.log(`La edad ingresada no cumple con los parámetros.`);
        break;
}