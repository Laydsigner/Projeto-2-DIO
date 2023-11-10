let nivelXp = rankeada(80, 5);
let nivel;

function rankeada(vitoria, derrota) {
  let saldoVitorias = vitoria - derrota;
  return saldoVitorias;
}

if (nivelXp <= 10) {
  nivel = "Ferro";
} else if (nivelXp >= 11 && nivelXp <= 20) {
  nivel = "Bronze";
} else if (nivelXp >= 21 && nivelXp <= 50) {
  nivel = "Prata";
} else if (nivelXp >= 51 && nivelXp <= 80) {
  nivel = "Ouro";
} else if (nivelXp >= 81 && nivelXp <= 90) {
  nivel = "Diamante";
} else if (nivelXp >= 91 && nivelXp <= 100) {
  nivel = "Lendário";
} else if (nivelXp >= 101) {
  nivel = "Imortal";
}

console.log(
  "O heroi tem o saldo de " + nivelXp + " vitórias e esta no nivel de " + nivel
);
