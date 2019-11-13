//OBJETOS

//EJERCICIO 1

/**********************************************
 * Hacer un programa que nos permita 
 * cargar/modificar/borrar
 * productos (deberían tener "id", como identificador 
 * único de número, por ej: 1, 2, 3.; título, descripción
 * de producto y precio (float)).
 * 
 * Además de esto vamos a necesitar un carrito de compras
 * que nos permita cargar/modificar/borrar productos de 
 * nuestro carrito, sumar el precio total de los elementos
 * de nuestro carrito. 
 */


const productos = {

   lista:[],

/// AGREGAR UN PRODUCTO

   agregar_producto: function  (n_id,n_titulo,n_descripcion,n_precio) {

         this.lista.push({
            id: n_id,
            titulo: n_titulo,
            descripcion: n_descripcion,
            precio: parseFloat(n_precio),
         });

   },

///ELIMINAR UN PRODUCTO

   eliminar_producto: function (n_id) {

      const buscar = this.lista.findIndex (producto =>{
         //producto es un parametro nuevo, lo que queremos buscar para luego eliminar :3
         return producto = n_id
      })

      if (buscar == -1){
         //acordate que el findIndex cuando no encuentra nada tira -1
         throw "Error: El id buscado no existe";
      }

      this.lista.splice(buscar,1);
   },

/// MODIFICAR UN PRODUCTO

   modificar_producto: function (n_id, dataProducto) {

      for(let producto of this.lista) {
         //otra vez declaramos producto como una variable nueva

         if(producto.id==n_id){
            // estamos vinculando esta variable producto con el ID

            let misClaves = object.keys(dataProducto);

            //declaramos una variable misClaves para obtener todas las claves de los objetos
               
            for(let key of misClaves) {

               producto[key] = dataProducto[key];
            }
   

         }

      }

   },

};


//////////////////////////////////////////////

/* Además de esto vamos a necesitar un carrito de compras
 * que nos permita cargar/borrar productos de 
 * nuestro carrito, sumar el precio total de los elementos
 * de nuestro carrito. 
 */

 const carrito = {

   lista:[],

   //AGREGAR UN PRODUCTO AL CARRITO

    cargar_producto: function (id, cantidad){

      const producto = producto.lista.find((producto)=>{
         //usamos Find para buscar el elemento

         return producto.id == id;
      });

      producto.cantidad = cantidad;
      this.lista.push(producto);

   },

   // ELIMINAR UN PRODUCTO DEL CARRITO

   borrar_producto: function (id){

      let buscar = this.lista.findIndex((producto)=>{
         // Usamos findIndex para buscar el indice de ese elemento
         return producto.id == id;
      });

      if (buscar == -1){
         throw "Error: Producto no existe en carrito";
      }
      this.lista.splice(buscar,1);
         // De lo que se almaceno en mi variable Buscar, es lo que voy a eliminar
   },

   // AGREGAR VARIOS PRODUCTOS IGUALES AL CARRITO

   sumar_iguales_productos: function (){

      let total = 0;

      for(let producto of this.lista){
         total += parseFloat(producto.precio * producto.cantidad); 
      }

      return total;

   },




 }





////////////////////

module.exports = {
   productos
//productos es el nombre de la variable no del archivo
};

///////////////////