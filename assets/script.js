// O usuário deve preencher cada campo de nota e peso respectivo
// O algoritmo deve:
// *   Guardar o valor de cada nota
// *   Guardar o valor de cada peso
// *   Multiplicar o valor da nota e peso respectivo
// *   Somar todos os resultados e dividí-los por n número de notas
// *   Retornar a mensagem no console com a media ponderada dos vestibulandos
// *   Em uma refatoração: Procurar melhorar a lógica e retornar a mensagem na tela para o usuário

const calcMedia = document.querySelector('#calcPrincipal');
calcMedia.addEventListener("click", function (e) {

    e.preventDefault()

    const notaRE = parseFloat(document.querySelector('#notare').value, 10);
    let pesoRE = parseInt(document.querySelector('#pesore').value, 10);

    const notaCN = parseFloat(document.querySelector('#notacn').value, 10);
    let pesoCN = parseInt(document.querySelector('#pesocn').value, 10);

    const notaCH = parseFloat(document.querySelector('#notach').value, 10);
    let pesoCH = parseInt(document.querySelector('#pesoch').value, 10);

    const notaLC = parseFloat(document.querySelector('#notalc').value, 10);
    let pesoLC = parseInt(document.querySelector('#pesolc').value, 10);

    const notaMT = parseFloat(document.querySelector('#notamt').value, 10);
    let pesoMT = parseInt(document.querySelector('#pesomt').value, 10);

    let mediaPeso = parseInt(pesoRE + pesoCN + pesoCH + pesoLC + pesoMT);

    const mediaGeral =
        Math.round((notaRE * pesoRE + notaCN * pesoCN + notaCH * pesoCH + notaLC * pesoLC + notaMT * pesoMT) / Math.trunc(mediaPeso));

    if (pesoRE > 5 || pesoCN > 5 || pesoCH > 5 || pesoLC > 5 || pesoMT > 5) {
        document.getElementById("resultMessage").innerHTML = "O peso máximo é 5! Insira um valor menor";
    }

    else if (notaRE > 1000 || notaCN > 1000 || notaCH > 1000 || notaLC > 1000 || notaMT > 1000) {
        document.getElementById("resultMessage").innerHTML = "A nota máxima é 1000! Insira um valor menor";
    }

    else if (mediaGeral < 600) {
        document.getElementById("resultMessage").innerHTML = "Sua média no ENEM de 2023 é de: " + mediaGeral + " pontos. No proximo ano será ainda melhor!";
    }

    else {
        document.getElementById("resultMessage").innerHTML = "Sua media do ENEM 2023 é de: " + mediaGeral + " pontos! Boa Sorte no SISU e Prouni!";
    }
});