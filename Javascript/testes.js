


function somar(...numeros) {
    let total = 0;

    for (const numero of numeros) {
        total += numero;
    }

    return total;
}

console.log(somar(100, 25, 30, 40, 0));