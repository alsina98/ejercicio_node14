const log = console.log;

const main = (num) => {
    const lista = [0, 1];
    
    for (let i = 2; i <= num; i++){
        lista[i] = lista[i-1] + lista[i-2];
    }
    return lista[num]
}

log(main(5))


/*

Crea un nuevo fichero JS que contenga las siguientes líneas
- Una función que admita un parámetro "num", y devuelva una lista con esa cantidad de números de la secuencia de Fibonacci (Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])
- Ejecuta la depuración de VSCode para visualizar la ejecución de la función

*/
