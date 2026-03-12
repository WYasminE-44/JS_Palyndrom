function palindromo(num) {
    let invertido = 0;
    let original = num;

    while (num > 0) {
        let resultado = num % 10;
        num = num - resultado;
        num = num / 10;
        invertido = (invertido * 10) + resultado;
    }

    console.log("Número invertido:", invertido);

    if (invertido == original) {
        return true;
    } else {
        return false;
    }
}

console.log("¿Es palíndromo?:", palindromo(123));