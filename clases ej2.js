/**
 * Refactorizar la lista de productos con el 
 * carrito de compras usando clases. 
 * Vamos a tener 3 tipos de productos, 
 *  1. Perfumes
 *  2. Chocolates
 *  3. Auriculares
 * Los 3 productos van a tener distintas 
 * caracteristicas, aunque compartan marca y precio.
 * Los chocolates tienen porcentaje, leche, tipo, 
 * extras (almendras, mani, pasas). 
 * Los auriculares van a tener una variable
 * "wireless" y una "tipo" (cerrados, abiertos)
 * 
 */

class Catalogo  {
 
    constructor(){
        this.lista=[];
    }
    agregar(producto) {
          this.lista.push(producto);

    }
    enlistar(){
        lista_nueva=[];

        /// tengo que hacer un FOR OF para que me agregue todo a la lista
        // despues de esto hago un return
    }
 
 };
 





class Producto {

    constructor (tipo,marca,precio){
        this.tipo=tipo;
        this.marca=marca;
        this.precio=precio;
    }
    
}

class Auricular extends Producto {
    constructor (tipo, marca, precio,coneccion,subtipo){
        super(tipo,marca,precio);

        this.coneccion=coneccion;
        this.subtipo=subtipo;
    }
}

class Chocolate extends Producto {
    constructor (tipo, marca, precio,porcentaje,subtipo,extra){
        super(tipo,marca,precio);

        this.porcentaje=porcentaje;
        this.subtipo=subtipo;
        this.extra=extra;
    }
    
}

class Perfume extends Producto {
    constructor (tipo, marca, precio,genero,intensidad){
        super(tipo,marca,precio); 

        this.genero=genero;
        this.intensidad=intensidad
    }
    
}



 /* 
 * Voy a necesitar un metodo que me devuelva una lista
 * formateada con todos los productos y caracteristicas 
 * en un texto. Uno por linea.
 * 
 * Ademas de eso cada producto puede tener descuentos, en 
 * porcentaje.
 * 
 * Hay que refactorizar el carrito de compras, de forma
 * que tenga lo mismo que hacia antes, pero a la hora de 
 * calcular el precio, lo haga teniendo en cuenta los
 * descuentos que aplican a cada producto.
 * 
 * El carrito tiene que tener una funcion que me permita
 * listar todos los productos agregados formateados con 
 * descripcion, cantidad, y un producto por linea.
 * 
 * Por ultimo sumar una clase cupon que tiene otro descuento
 * en porcentaje. Yo puedo aplicar un solo cupon a mi carrito
 * de compras y el calculo final del precio tiene que tomar
 * en cuenta esto.
 * 
 */


 ////////////////////

module.exports = {
   Producto,
   Auricular,
   Chocolate,
   Perfume,
 };
 
 ///////////////////