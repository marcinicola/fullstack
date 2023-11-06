function repeatHello(callback){
    setInterval(()=>{
        callback()
    },1000)
   
}

const callback = (()=>{
    console.log("Hello");
})

repeatHello(callback);

/* Perché è più leggibile, il contesto "this" lo eredita dal genitore, senza crearlo autonomamente come le function normali */
 
    /* Funziona anche così */
/* setInterval(callback,1000) */