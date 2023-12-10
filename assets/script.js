function calcular(vitoria,derrota){
    let resultado = vitoria - derrota
    return resultado
}

function showRanking(){
    let vitoriaHTML = document.querySelector(".victories").value;
    let derrotaHTML = document.querySelector(".defeats").value;
    let resultadoHTML = document.querySelector(".message");
    let resultadoCalc = calcular(vitoriaHTML,derrotaHTML);
    
    switch(true) {
        case resultadoCalc > 1 && resultadoCalc <= 10:
            resultadoHTML.innerHTML = `O Herói tem um saldo de ${resultadoCalc} vitórias e está no ranking:<p>Ferro</p>`
            document.querySelector("p").style.color = "white"
            break;
        case resultadoCalc > 10 && resultadoCalc <= 20:
            resultadoHTML.innerHTML = `O Herói tem um saldo de ${resultadoCalc} vitórias e está no ranking:<p>Bronze</p>`
            document.querySelector("p").style.color = "brown"
            break;
        case resultadoCalc > 20 && resultadoCalc <= 50 :
            resultadoHTML.innerHTML = `O Herói tem um saldo de ${resultadoCalc} vitórias e está no ranking:<p>Prata</p> `
            document.querySelector("p").style.color = "gray"
            break;
        case resultadoCalc > 50 && resultadoCalc <= 80 :
            resultadoHTML.innerHTML = `O Herói tem um saldo de ${resultadoCalc} vitórias e está no ranking:<p>Ouro</p> `
            document.querySelector("p").style.color = "gold"
            break; 
        case resultadoCalc > 80 && resultadoCalc <= 90 :
            resultadoHTML.innerHTML = `O Herói tem um saldo de ${resultadoCalc} vitórias e está no ranking:<p>Diamante</p> `
            document.querySelector("p").style.color = "aquamarine"
            break;
        case resultadoCalc > 90 && resultadoCalc <= 100 :
            resultadoHTML.innerHTML = `O Herói tem um saldo de ${resultadoCalc} vitórias e está no ranking:<P>Lendário</p> ` 
            document.querySelector("p").style.color = "purple"
            break;
        case resultadoCalc >= 101:
            resultadoHTML.innerHTML = `O Herói tem um saldo de ${resultadoCalc} vitórias e está no ranking:<p>Imortal</p>`
            document.querySelector("p").style.color = "red"
            break;
    }
}