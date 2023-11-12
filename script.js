let nome = "bocó";
let xp = 20000;
let saida = ""

if (xp <= 1000){
    saida = "Ferro";
} else if (xp > 1000 && xp <= 2000){
    saida = "Bronze";
} else if (xp > 2000 && xp <= 5000){
    saida = "Prata";
} else if (xp > 5000 && xp <= 7000){
    saida = "Ouro";
} else if (xp > 7000 && xp <= 8000){
    saida = "Platina";
} else if (xp > 8000 && xp <= 9000){
    saida = "Ascendente";
} else if (xp > 9000 && xp <= 10000){
    saida = "Imortal";
} else if (xp >= 10001){
    saida = "Radiante";
}



console.log("O Herói de nome: "+ nome + " está no nivel: " + saida);