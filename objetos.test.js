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


 //lista de pasos para no morir en el intento
 // como cargamos un producto
 // en el objeto unitario hay que agregarle parametros, donde pongo los parametros?
 //
let productos =[];

const agregar_producto = (n_id,n_titulo,n_descripcion,n_precio)=>{

      productos.push({
         id: n_id,
         titulo: n_titulo,
         descripcion: n_descripcion,
         precio: parseFloat(n_precio),
      });

}

const eliminar_producto =(n_id)=>{

   for (let i=0 ; i < productos.length; i++){

      if(productos[i][0]=n_id){
         productos.splice(i,1);
      }
   }
   return(productos);
}

test ("Cargar producto tampones y toallitas", () => {
    
   agregar_producto(89,"tampones", "sirve para hacer un tecito", 45.95);
   agregar_producto(69,"toallitas", "paraa secar el sudor", 96.56);

    expect (productos.length).toBe (2);
    expect (productos[0].id).toBe(89);
 

 });

 test ("eliminar toallitas", () => {

   agregar_producto(89,"tampones", "sirve para hacer un tecito", 45.95);
   agregar_producto(69,"toallitas", "paraa secar el sudor", 96.56);

   eliminar_producto(69);

   expect (productos.length).toBe (1);
    

 });

 test ("Modificar tampones por galletitas", () => {
    

 

 });

 beforeEach(()=>{
   productos=[];
   console.log("Funciona el Before");
});
