/*
// --------------------------- PRIMER PRE-ENTREGA ---------------------------

// Definir los productos con constantes
let opcion
const guitarraFenderStratocaster = 2299.99;
const guitarraFenderTelecaster = 1899.99;
const guitarraGibsonLesPaulStandard = 2799.99;

const pedalBossOverdriveSD1 = 99.99;
const pedalIbanezTubescreamerTS9 = 149.99;
const pedalDOD250 = 109.99;

const amplificadorMarshallJCM800 = 2199.99;
const amplificadorMesaBoogieMarkV = 3499.99;
const amplificadorPeavey6505 = 1299.99;

const cuerdasDaddario942 = 12.99;
const cableMonsterParaGuitarra = 49.99;
const puasJimDunlopJazz3PackDe6 = 6.99;

// Inicializar el carrito de compras dentro del prompt
let total = 0;
function sumaTotal(a) {
    total += a
}
let salir = false

// Definir la pantalla inicial del prompt al abrirse la pagina
while (!salir) {
    let listado = parseInt(prompt("¡Bienvenido a nuestra tienda! Selecciona la opción que desees explorar: \n1. Guitarras \n2. Pedales \n3. Amplificadores \n4. Accesorios \n5. Ir al carrito de compras"));
    switch (listado) {

        // Detallar las opciones disponibles al ingresar a la opcion n1        
        case 1:
            do {
                opcion = prompt("¡Selecciona entre las mejores guitarras clasicas que podemos ofrecerte! \n1. Fender Stratocaster Standard U$S 2299.99 \n2. Fender Telecaster Professional U$S 1899.99 \n3. Gibson Les Paul Standard U$S 2799.99 \n4. Volver al menú \n5. Ir al carrito de compras");
                switch (opcion) {
                    case "1":
                        sumaTotal(guitarraFenderStratocaster)
                        console.log(guitarraFenderStratocaster)
                        break;
                    case "2":
                        sumaTotal(guitarraFenderTelecaster)
                        console.log(guitarraFenderTelecaster)
                        break;
                    case "3":
                        sumaTotal(guitarraGibsonLesPaulStandard)
                        console.log(guitarraGibsonLesPaulStandard)
                        break;
                    case "5":
                        salir = true
                        alert("El total a pagar es: U$S " + total.toFixed(2));
                        break
                }

                // Preguntar en el caso de querer agregar algo mas dentro de esa opcion, si se desea volver al menu principal o si se quiere cerrar el carrito de compras
                if (opcion !== "4" && opcion !== "5") {
                    if (opcion !== null && opcion !== "") {
                        if (opcion < 1 || opcion > 5) {
                            alert("Elige una de las opciones disponibles, por favor")
                        } else if (isNaN(opcion)) {
                            alert("Debes ingresar un número.")
                        } else {
                            opcion = prompt("¿Te gustaria agregar algo más a tu compra? \n1. Fender Stratocaster Standard: U$S 2299.99 \n2. Fender Telecaster Professional: U$S 1899.99 \n3. Gibson Les Paul Standard: U$S 2799.99 \n4. Volver al menú \n5. Ir al carrito de compras")
                            switch (opcion) {
                                case "1":
                                    sumaTotal(guitarraFenderStratocaster)
                                    console.log(guitarraFenderStratocaster)
                                    break;
                                case "2":
                                    sumaTotal(guitarraFenderTelecaster)
                                    console.log(guitarraFenderTelecaster)
                                    break;
                                case "3":
                                    sumaTotal(guitarraGibsonLesPaulStandard)
                                    console.log(guitarraGibsonLesPaulStandard)
                                    break;
                                case "5":
                                    salir = true
                                    alert("El total a pagar es: U$S " + total.toFixed(2));
                                    break;
                            }
                        }
                    } else {
                        alert("Elige una opción, por favor")
                    }
                }
            } while (opcion !== "4" && opcion !== "5")
            if (opcion === "5") {
                salir = true;
            }
            break;

        // Detallar las opciones disponibles al ingresar a la opcion n2
        case 2:
            do {
                opcion = prompt("Elige entre los pedales overdrive más populares para mejorar tu sonido \n1. Pedal Boss Overdrive SD1: U$S 99.99 \n2. Pedal Ibanez Tubescreamer TS9: U$S 149.99 \n3. Pedal DOD 250 Preamp: U$S 109.99 \n4. Volver al menú \n5. Ir al carrito de compras")
                switch (opcion) {
                    case "1":
                        sumaTotal(pedalBossOverdriveSD1)
                        console.log(pedalBossOverdriveSD1)
                        break;
                    case "2":
                        sumaTotal(pedalIbanezTubescreamerTS9)
                        console.log(pedalIbanezTubescreamerTS9)
                        break;
                    case "3":
                        sumaTotal(pedalDOD250)
                        console.log(pedalDOD250)
                        break;
                    case "5":
                        salir = true
                        alert("El total a pagar es: U$S " + total.toFixed(2));
                        break
                }

                // Preguntar en el caso de querer agregar algo mas dentro de esa opcion, si se desea volver al menu principal o si se quiere cerrar el carrito de compras
                if (opcion !== "4" && opcion !== "5") {
                    if (opcion !== null && opcion !== "") {
                        if (opcion < 1 || opcion > 5) {
                            alert("Elige una de las opciones disponibles, por favor")
                        } else if (isNaN(opcion)) {
                            alert("Debes ingresar un número.")
                        } else {
                            opcion = prompt("¿Qué más te gustaria sumarle a tu compra? \n1. Pedal Boss Overdrive SD1: U$S 99.99 \n2. Pedal Ibanez Tubescreamer TS9: U$S 149.99 \n3. Pedal DOD 250 Preamp: U$S 109.99 \n4. Volver al menú \n5. Ir al carrito de compras")
                            switch (opcion) {
                                case "1":
                                    sumaTotal(pedalBossOverdriveSD1)
                                    console.log(pedalBossOverdriveSD1)
                                    break;
                                case "2":
                                    sumaTotal(pedalIbanezTubescreamerTS9)
                                    console.log(pedalIbanezTubescreamerTS9)
                                    break;
                                case "3":
                                    sumaTotal(pedalDOD250)
                                    console.log(pedalDOD250)
                                    break;
                                case "5":
                                    salir = true
                                    alert("El total a pagar es: U$S " + total.toFixed(2));
                                    break
                            }
                        }
                    } else {
                        alert("Elige una opción, por favor")
                    }
                }
            } while (opcion !== "4" && opcion !== "5")
            if (opcion === "5") {
                salir = true;
            }
            break;

        // Detallar las opciones disponibles al ingresar a la opcion n3
        case 3:
            do {
                opcion = prompt("¡El core de tu sonido se encuentra en el amplicador. Elige entre los best-sellers usados en cientos de discos! \n1. Amplificador Marshall JCM800: U$S 2199.99 \n2. Amplificador Mesa Boogie Mark V: U$S 3499.99 \n3. Amplificador Peavey 6505: U$S 1299.99 \n4. Volver al menú \n5. Ir al carrito de compras")
                switch (opcion) {
                    case "1":
                        sumaTotal(amplificadorMarshallJCM800)
                        console.log(amplificadorMarshallJCM800)
                        break;
                    case "2":
                        sumaTotal(amplificadorMesaBoogieMarkV)
                        console.log(amplificadorMesaBoogieMarkV)
                        break;
                    case "3":
                        sumaTotal(amplificadorPeavey6505)
                        console.log(amplificadorPeavey6505)
                        break;
                    case "5":
                        salir = true
                        alert("El total a pagar es: U$S " + total.toFixed(2));
                        break
                }

                // Preguntar en el caso de querer agregar algo mas dentro de esa opcion, si se desea volver al menu principal o si se quiere cerrar el carrito de compras
                if (opcion !== "4" && opcion !== "5") {
                    if (opcion !== null && opcion !== "") {
                        if (opcion < 1 || opcion > 5) {
                            alert("Elige una de las opciones disponibles, por favor")
                        } else if (isNaN(opcion)) {
                            alert("Debes ingresar un número.")
                        } else {
                            opcion = prompt("¿Te gustaria agregar algo más? \n1. Amplificador Marshall JCM800: U$S 2199.99 \n2. Amplificador Mesa Boogie Mark V: U$S 3499.99 \n3. Amplificador Peavey 6505: U$S 1299.99 \n4. Volver al menú \n5. Ir al carrito de compras")
                            switch (opcion) {
                                case "1":
                                    sumaTotal(amplificadorMarshallJCM800)
                                    console.log(amplificadorMarshallJCM800)
                                    break;
                                case "2":
                                    sumaTotal(amplificadorMesaBoogieMarkV)
                                    console.log(amplificadorMesaBoogieMarkV)
                                    break;
                                case "3":
                                    sumaTotal(amplificadorPeavey6505)
                                    console.log(amplificadorPeavey6505)
                                    break;
                                case "5":
                                    salir = true
                                    alert("El total a pagar es: U$S " + total.toFixed(2));
                                    break
                            }
                        }
                    } else {
                        alert("Elige una opción, por favor")
                    }
                }
            } while (opcion !== "4" && opcion !== "5")
            if (opcion === "5") {
                salir = true;
            }
            break;

        // Detallar las opciones disponibles al ingresar a la opcion n4
        case 4:
            do {
                opcion = prompt("Nunca te puede faltar alguno de estos accesorios. ¡Selecciona lo que necesites! \n1. Cuerdas Daddario 9-42: U$S 12.99 \n2. Cable Monster Para Guitarra x 3 mts: U$S 49.99 \n3. Pack de 6 puas Jim Dunlop Jazz 3: U$S 6.99 \n4. Volver al menú \n5. Ir al carrito de compras")
                switch (opcion) {
                    case "1":
                        sumaTotal(cuerdasDaddario942)
                        console.log(cuerdasDaddario942)
                        break;
                    case "2":
                        sumaTotal(cableMonsterParaGuitarra)
                        console.log(cableMonsterParaGuitarra)
                        break;
                    case "3":
                        sumaTotal(puasJimDunlopJazz3PackDe6)
                        console.log(puasJimDunlopJazz3PackDe6)
                        break;
                    case "5":
                        salir = true
                        alert("El total a pagar es: U$S " + total.toFixed(2));
                        break
                }

                // Preguntar en el caso de querer agregar algo mas dentro de esa opcion, si se desea volver al menu principal o si se quiere cerrar el carrito de compras
                if (opcion !== "4" && opcion !== "5") {
                    if (opcion !== null && opcion !== "") {
                        if (opcion < 1 || opcion > 5) {
                            alert("Elige una de las opciones disponibles, por favor")
                        } else if (isNaN(opcion)) {
                            alert("Debes ingresar un número.")
                        } else {
                            opcion = prompt("¿Te podemos ayudar con algo más? ¡Agrega al carrito lo que necesites! \n1. Cuerdas Daddario 9-42: U$S 12.99 \n2. Cable Monster Para Guitarra x 3 mts: U$S 49.99 \n3. Pack de 6 puas Jim Dunlop Jazz 3: U$S 6.99 \n4. Volver al menú \n5. Ir al carrito de compras")
                            switch (opcion) {
                                case "1":
                                    sumaTotal(cuerdasDaddario942)
                                    console.log(cuerdasDaddario942)
                                    break;
                                case "2":
                                    sumaTotal(cableMonsterParaGuitarra)
                                    console.log(cableMonsterParaGuitarra)
                                    break;
                                case "3":
                                    sumaTotal(puasJimDunlopJazz3PackDe6)
                                    console.log(puasJimDunlopJazz3PackDe6)
                                    break;
                                case "5":
                                    salir = true
                                    alert("El total a pagar es: U$S " + total.toFixed(2));
                                    break
                            }
                        }
                    } else {
                        alert("Elige una opción, por favor")
                    }
                }
            } while (opcion !== "4" && opcion !== "5")
            if (opcion === "5") {
                salir = true;
            }
            break;

        // Cerrar el carrito de compras y hacer la sumatoria de los elementos
        case 5:
            if (listado === 5) {
                salir = true
                alert("El total a pagar es: U$S " + total.toFixed(2));
                break
            }

        // Implementacion de metodo de seguridad para no romper el prompt y asegurar su correcto uso
        default:
            if (listado !== null && listado !== "") {
                if (listado < 1 || listado > 5) {
                    alert("Elige una de las opciones disponibles, por favor")
                } else if (isNaN(listado)) {
                    alert("Debes ingresar un número.")
                } else {
                    salir = true;
                }
            }
    }
}
*/

// --------------------------- SEGUNDA PRE-ENTREGA ---------------------------


//Definir un array de productos

const productos = {
    "1": { nombre: "Fender Vintage II 1961 Stratocaster - Fiesta Red", precio: 2299 },
    "2": { nombre: "Fender Professional II Telecaster - Butterscotch Blonde", precio: 1899 },
    "3": { nombre: "Gibson Les Paul Standard '60s- Honey Amber", precio: 2799 },
    "4": { nombre: "Gibson ES-335 Semi-hollowbody- Sixties Cherry", precio: 3499 },
    "5": { nombre: "Ibanez Genesis RG550 - Desert Sun Yellow", precio: 999 },
    "6": { nombre: "Ibanez Prestige AZ2204NW - Pastel Pink", precio: 1999 },
};

// Setear la calculadora del carrito de compras dentro del prompt en 0

const calcularTotal = (productosSeleccionados) => {
    let total = 0;
    productosSeleccionados.forEach((item) => {
        total += productos[item.id].precio * item.cantidad;
    });
    return total;
};

// Armado del menu del prompt

const construirMenu = () => {
    let menu = "Bienvenido a Overdrive. Utilice solo los numeros (0-6) para elegir la opcion deseada:\n";
    for (let key in productos) {
        menu += `${key}. ${productos[key].nombre} - $${productos[key].precio}\n`;
    }
    menu += "0. Ir al carrito de compras";
    return menu;
};

// Funcion base para iniciarlizar el prompt

const Interaccion = () => {
    const productosSeleccionados = [];
    const menu = construirMenu();

    do {
        const opcion = prompt(`${menu}\n`);

        // Determinar las variables posibles elegidas por el usuario y que ocurre al ejecutarse
        if (opcion === "0") {
            break;
        } else if (productos[opcion]) {
            const productoExistente = productosSeleccionados.find(item => item.id === opcion);
            if (productoExistente) {
                productoExistente.cantidad += 1;
            } else {
                productosSeleccionados.push({ id: opcion, cantidad: 1 });
            }
            alert(`Producto seleccionado: ${productos[opcion].nombre}`);
        } else {
            alert("Opción inválida. Por favor, ingrese un número de producto válido.");
        }
    } while (true);

    // Sumatoria total de los productos seleccionados y su ordenamiento en pantalla

    const totalAPagar = calcularTotal(productosSeleccionados);
    let resumen = "Productos seleccionados:\n";
    productosSeleccionados.forEach((item) => {
        resumen += `${productos[item.id].nombre} - Cantidad: ${item.cantidad} - Subtotal: $${productos[item.id].precio * item.cantidad}\n`;
    });
    resumen += `Total a pagar: $${totalAPagar}`;
    alert(resumen);
};

// Arranque de la funcion al cargar la pagina

Interaccion();