function calcularSaldoRankeadas(vitorias, derrotas) {
    return vitorias - derrotas;
}

function calcularNivelRankeada(vitorias) {
    if (vitorias < 10) {
        return "Ferro";
    } else if (vitorias <= 20) {
        return "Bronze";
    } else if (vitorias <=50) {
        return "Prata";
    } else if (vitorias <=80) {
        return "Ouro";
    } else if (vitorias <=90) {
        return "Diamante";
    } else if (vitorias <=100) {
        return "Lendário";
    } else {
        return "Imortal";
    }
}
let derrotas = 0;

// loop a cada nova vitoria
for (let aux = 100; aux >= 0; aux--) {
    console.log("O Herói tem saldo de " + calcularSaldoRankeadas(aux, derrotas) + " e está no nível de " + calcularNivelRankeada(aux));
    derrotas++;
}
