const log = console.log;

const main = (num) => {
    const lista = [0, 1];
    
    for (let i = 2; i <= num; i++){
        lista[i] = lista[i-1] + lista[i-2];
    }
    return lista[num]
}

log(main(5))
