//CLASES

/**
 * Las clases de javascript son una forma 
 * nueva de definir objetos.
 * Esto significa que estoy describiendo 
 * objetos en una sintaxis distinta, pero 
 * funciona, internamente, de la misma forma
 * que los objetos.
 * 
 * Lo primero que tenemos es el constructor, 
 * que va a ser el lugar donde vamos a 
 * inicializar nuestras variables.
 * 
 * De la misma forma que en objetos, tenemos 
 * getters y setters. Y tambien accedemos a 
 * nuestras propiedades o metodos usando
 * la palabra reservada "this"
 * 
 * La principal diferencia entre objetos y 
 * clases se radica en como crear un objeto 
 * nuevo.
 */

 /*
class Gato {
    constructor(nombre, edad, vidas = 7) {
        this.nombre = nombre;
        this.edad = edad;
        this.vidas = vidas;
    }

    get edadGatuna () {
        return this.calcularEdadGatuna();
    }

    calcularEdadGatuna() {
        return this.edad * 9;
    }
}

// Para instanciar(crear) un nuevo objeto 
// lo hacemos con la 
// palabra reservada "new"
const michu = new Gato("Michu", 4);

/**
 * Si quisieramos hacer lo mismo
 * con objetos puros, tendriamos 
 * que hacer lo siguiente
 */
/*
const Gato = {
    nombres: "",
    edad: 0,
    vidas: 7,
    get edadGatuna () {
        return this.calcularEdadGatuna();
    },
    calcularEdadGatuna: function() {
        return this.edad * 9;
    }
}

// Y de la siguiente forma, clonar el objeto
// gato para usarlo como una "fabrica" de objetos
// a diferencia de la clase que lo es por definicion
const michu = Object.assign({}, Gato);


/**
 * Los metodos estaticos son metodos
 * a los cuales puedo acceder sin 
 * necesidad de instanciar un objeto. 
 * O sea, no necesito tener un objeto
 * para poder utilizar la funcionalidad.
 */
/*
class Gato {
    static maullar() {
        return "miau!";
    }
}
console.log(Gato.maullar());
*/

///////////////////////////////////////////////////

/**
 * Crear una clase Ropa, con propiedades
 * que me permitan definir sus 
 * caracteristicas basicas (nombre,
 * tipo, medidas, y pensar otras), y me permita 
 * hacer metodos para "ponerme" la ropa.
 * De esta forma, yo deberia poder
 * tener, por ejemplo, un metodo
 * "calzar" que no funcione si 
 * es una pollera, pero si 
 * funcione si es una zapatilla.
 * 
 * Crear varios tipos distintos de ropa.
 */

class Ropa {

    constructor(nombre,tipo,medida,color){
        this.nombre = nombre;
        this.tipo = tipo;
        this.medida = medida;
        this.color = color;
    }

    vestirParteDeAbajo (){
        if(this.tipo != "ropa"){
            throw "no se puede usar calzado como vestimenta"
        }
        return "ponerse un pantalon y/o falda";
    }

    calzar (){
        if (this.tipo != "calzado"){
            throw "la ropa no te sirve para caminar"}
        
        return "calzarse";
    }

    vestirParteDeArriba (){
        if(this.tipo != "ropa"){
            throw "como vas a lograr ponerte eso? jajaja"
        }
        return "ponerse una remera";
    }

}
 /**
  * Transformar los distintos tipos de ropa
  * del ejercicio anterior a nuevas clases
  * que extiendan de la clase principal.
  */

class Camison extends Ropa {

    constructor(){
        super("bla","ropa","xxl","verde");
    }
    vestirParteDeArriba(){
        return "yey estas lista para dormir";
    }
}

// la clase camison no va adentro de la clase Ropa, va aparte :3







////////////////////

module.exports = {
    Ropa,
    Camison,
 };
 
 ///////////////////