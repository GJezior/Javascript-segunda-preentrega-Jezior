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

let total = 0;
function sumaTotal(a){
    total += a
}
let salir = false

while (!salir){
    let listado = parseInt(prompt("¡Bienvenido a nuestra tienda! Selecciona la opción que desees explorar: \n1. Guitarras \n2. Pedales \n3. Amplificadores \n4. Accesorios \n5. Ir al carrito de compras"));
    switch (listado){
        case 1:
            do{
                opcion = prompt("¡Selecciona entre las mejores guitarras clasicas que podemos ofrecerte! \n1. Fender Stratocaster Standard U$S 2299.99 \n2. Fender Telecaster Professional U$S 1899.99 \n3. Gibson Les Paul Standard U$S 2799.99 \n4. Volver al menú \n5. Ir al carrito de compras");
                switch(opcion){
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
                if (opcion !== "4" && opcion !== "5"){
                    if (opcion !== null && opcion !== ""){
                        if (opcion < 1 || opcion > 5){
                            alert("Elige una de las opciones disponibles, por favor")
                        } else if (isNaN(opcion)) {
                            alert("Debes ingresar un número.")
                        } else{
                            opcion = prompt("¿Te gustaria agregar algo más a tu compra? \n1. Fender Stratocaster Standard: U$S 2299.99 \n2. Fender Telecaster Professional: U$S 1899.99 \n3. Gibson Les Paul Standard: U$S 2799.99 \n4. Volver al menú \n5. Ir al carrito de compras")
                            switch(opcion){
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
                    } else{
                        alert("Elige una opción, por favor")
                    }
                }
            } while (opcion !== "4" && opcion !== "5")   
            if (opcion === "5"){
                salir = true;
            }
            break;
        case 2:
            do{
                opcion = prompt("Elige entre los pedales overdrive más populares para mejorar tu sonido \n1. Pedal Boss Overdrive SD1: U$S 99.99 \n2. Pedal Ibanez Tubescreamer TS9: U$S 149.99 \n3. Pedal DOD 250 Preamp: U$S 109.99 \n4. Volver al menú \n5. Ir al carrito de compras")
                switch(opcion){
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
                if (opcion !== "4" && opcion !== "5"){
                    if (opcion !== null && opcion !== ""){
                        if (opcion < 1 || opcion > 5){
                            alert("Elige una de las opciones disponibles, por favor")
                        } else if (isNaN(opcion)) {
                            alert("Debes ingresar un número.")
                        } else{
                            opcion = prompt("¿Qué más te gustaria sumarle a tu compra? \n1. Pedal Boss Overdrive SD1: U$S 99.99 \n2. Pedal Ibanez Tubescreamer TS9: U$S 149.99 \n3. Pedal DOD 250 Preamp: U$S 109.99 \n4. Volver al menú \n5. Ir al carrito de compras")
                            switch(opcion){
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
            if (opcion === "5"){
                salir = true;
            }
            break;
        case 3: 
            do{
                opcion = prompt("¡El core de tu sonido se encuentra en el amplicador. Elige entre los best-sellers usados en cientos de discos! \n1. Amplificador Marshall JCM800: U$S 2199.99 \n2. Amplificador Mesa Boogie Mark V: U$S 3499.99 \n3. Amplificador Peavey 6505: U$S 1299.99 \n4. Volver al menú \n5. Ir al carrito de compras")
                switch(opcion){
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
                if (opcion !== "4" && opcion !== "5"){
                    if (opcion !== null && opcion !== ""){
                        if (opcion < 1 || opcion > 5){
                            alert("Elige una de las opciones disponibles, por favor")
                        } else if (isNaN(opcion)) {
                            alert("Debes ingresar un número.")
                        } else{
                            opcion = prompt("¿Te gustaria agregar algo más? \n1. Amplificador Marshall JCM800: U$S 2199.99 \n2. Amplificador Mesa Boogie Mark V: U$S 3499.99 \n3. Amplificador Peavey 6505: U$S 1299.99 \n4. Volver al menú \n5. Ir al carrito de compras")
                            switch(opcion){
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
                    } else{
                        alert("Elige una opción, por favor")
                    }
                }
            } while (opcion !== "4" && opcion !== "5")
            if (opcion === "5"){
                salir = true;
            }
            break;
        case 4:
            do{
                opcion = prompt("Nunca te puede faltar alguno de estos accesorios. ¡Selecciona lo que necesites! \n1. Cuerdas Daddario 9-42: U$S 12.99 \n2. Cable Monster Para Guitarra x 3 mts: U$S 49.99 \n3. Pack de 6 puas Jim Dunlop Jazz 3: U$S 6.99 \n4. Volver al menú \n5. Ir al carrito de compras")
                switch(opcion){
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
                if (opcion !== "4" && opcion !== "5"){
                    if (opcion !== null && opcion !== ""){
                        if (opcion < 1 || opcion > 5){
                            alert("Elige una de las opciones disponibles, por favor")
                        } else if (isNaN(opcion)) {
                            alert("Debes ingresar un número.")
                        } else{
                            opcion = prompt("¿Te podemos ayudar con algo más? ¡Agrega al carrito lo que necesites! \n1. Cuerdas Daddario 9-42: U$S 12.99 \n2. Cable Monster Para Guitarra x 3 mts: U$S 49.99 \n3. Pack de 6 puas Jim Dunlop Jazz 3: U$S 6.99 \n4. Volver al menú \n5. Ir al carrito de compras")
                            switch(opcion){
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
            if (opcion === "5"){
                salir = true;
            }
            break;
        case 5:
            if (listado === 5){
                salir = true
                alert("El total a pagar es: U$S " + total.toFixed(2));
                break
            }
        default:
            if (listado !== null && listado !== ""){
                if (listado < 1 || listado > 5){
                    alert("Elige una de las opciones disponibles, por favor")
                } else if (isNaN(listado)){
                    alert("Debes ingresar un número.")
                } else{
                    salir = true;
                }
            }
    }
}