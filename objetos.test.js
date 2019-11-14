//////////////

const shopping = require('./objetos'),
    productos = shopping.productos;
    libro = shopping.libro;
    
    //productos es el nombre de la variable, no del archivo

//////////////

/*
beforeEach(()=>{
    productos.lista = [];
    console.log("Funciona el Before");
 });




////////////


test ("Cargar producto tampones y toallitas", () => {
    

    productos.agregar_producto(89,"tampones", "sirve para hacer un tecito", 45.95);
    productos.agregar_producto(69,"toallitas", "paraa secar el sudor", 96.56);
 
     expect (productos.lista[0]).toStrictEqual ({

        id: 89,
        titulo: "tampones",
        descripcion: "sirve para hacer un tecito",
        precio: 45.95
     });

     expect (productos.lista[1]).toStrictEqual ({

        id: 69,
        titulo: "toallitas",
        descripcion: "paraa secar el sudor",
        precio: 96.56
     });

     
  
 
  });

  /// Borrar un producto 

test("Borra producto de lista por id", () =>{
    productos.agregar_producto(8, "supositorio", "medicamento por via vaginal", 145.78);
    expect(productos.lista.length).toBe(1);
    productos.eliminar_producto(1);
    expect(productos.lista.length).toBe(0);
});

// Intentar borrar un producto pero ingresando cualquier cosa

test("Tira error cuando no existe id para borrar", () =>{
    expect(() => {
        productos.eliminar_producto(1);
    }).toThrow("Error: El id buscado no existe");
});

/////////////////////////////////////////


test("Borro producto del carrito", () =>{
    productos.cargar_producto(1, "titulo", "desc", 12.33);
    carrito.agregar(1, 3);
    expect(carrito.lista.length).toBe(1);
    carrito.borrar(1);
    expect(carrito.lista.length).toBe(0);
});

test("Tira error cuando producto no existe en carrito", () =>{
    expect(() => {
        carrito.borrar(1);
    }).toThrow("Error: Producto no existe en carrito");
});

test("Suma los precios de los productos", () => {
    productos.agregar(1, "titulo", "desc", 10.50);
    productos.agregar(2, "titulo", "desc", 20.50);
    productos.agregar(3, "titulo", "desc", 30.00);
    productos.agregar(4, "titulo", "desc", 40.00);
    carrito.agregar(1, 2);
    carrito.agregar(2, 2);
    carrito.agregar(3, 1);
    carrito.agregar(4, 1);
    const total = carrito.sumarPrecio();
    expect(total).toBe(132.00);
});

*/

/////////////////////////////////////////////////////////

// EJERCICIO 02

test ("agregar una review", () => {

    libro.agregar_review("Paola","Me parece una cagada",2);

    expect (libro.lista_reviews[0]).toStrictEqual ({

        nombre: "Paola",
        critica: "Me parece una cagada",
        valoracion: 2
    });
});