const almacen = require('./clases ej2'),
    Producto = almacen.Carrito;
    Chocolate = almacen.Chocolate;
    Perfume = almacen.Perfume;
    Auricular = almacen.Auricular;

    ////////////////

    beforeEach (()=>{
        catalogo.lista;
        console.log("funciona");
    });

    ////////////////////

    test ("listar todos los productos del carrito", ()=>{

        const BeyerDinamics = new Auricular ("Auricular","BeyerDinamics","$120","cable","over-ear");
        const Channel = new Channel ("Perfume","Channel","$300","mujer","Eau de Perfume");
        const Milka = new Milka ("Chocolate","Milka","$25","60% leche","negro","mani");
        const lista = new Catalogo();
        lista.agregar_producto(BeyerDinamics);
        lista.agregar_producto(Channel);
        lista.agregar_producto(Milka);

        expect (lista.enlistar().length).toBe (3);
        
        
    });