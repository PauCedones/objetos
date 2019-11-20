const armario = require('./clases'),
    Ropa = armario.Ropa;

//////////////////////////////////////////

beforeEach(()=>{
    Ropa;
    console.log("funciona");
});


test ("ponerse una remera y una pollera", () => {

    const remera = new Ropa("remera", "ropa", "xxl", "rosa");
    const pantalon = new Ropa("falda","ropa", 56, "negro");

    expect (remera.vestirParteDeArriba()).toBe ("ponerse una remera");
    expect (pantalon.vestirParteDeAbajo()).toBe ("ponerse un pantalon y/o falda");

});