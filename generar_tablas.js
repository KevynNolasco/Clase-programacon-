const generar_tablas = (n) => {
    if (n) {
       
        const number = n;
        console.log(`tabla del ${number}`);

        for (let i = 0; i < 10; i++) {
            const m = i + 1;
            const result = number * m;
            //2 x 1 = 2 
            console.log(`${number}x ${m} = ${result}`);
        }
    } else {
        throw new error("argumento n no es correcto") 
      
    }
};
 
 module.exports= {generar_tablas}

 