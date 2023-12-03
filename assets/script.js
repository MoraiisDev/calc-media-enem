// O usuário deve preencher cada campo de nota e peso respectivo
// O algoritmo deve:
// *   Guardar o valor de cada nota
// *   Guardar o valor de cada peso
// *   Multiplicar o valor da nota e peso respectivo
// *   Somar todos os resultados e dividí-los por n número de notas
// *   Retornar a mensagem no console com a media ponderada dos vestibulandos
// *   Em uma refatoração: Procurar melhorar a lógica e retornar a mensagem na tela para o usuário

const calcMedia = document.querySelector('#calcPrincipal');
calcMedia.addEventListener("click", function(e) {

    e.preventDefault()

    const notaRE = document.querySelector('#notare').value;
    const pesoRE = document.querySelector('#pesore').value;

    const notaCN = document.querySelector('#notacn').value;
    const pesoCN = document.querySelector('#pesocn').value;

    const notaCH = document.querySelector('#notach').value;
    const pesoCH = document.querySelector('#pesoch').value;

    const notaLC = document.querySelector('#notalc').value;
    const pesoLC = document.querySelector('#pesolc').value;

    const notaMT = document.querySelector('#notamt').value;
    const pesoMT = document.querySelector('#pesomt').value;

    const mediaGeral = (notaRE * pesoRE)/5 + (notaCN * pesoCN)/5 + (notaCH * pesoCH)/5 + (notaLC * pesoLC)/5 + (notaMT * pesoMT)/5

    if (pesoRE > 5 || pesoCN > 5 || pesoCH > 5 || pesoLC > 5 || pesoMT > 5) {
        document.getElementById("resultMessage").innerHTML = "O peso máximo é 5! Insira um valor menor";
    }

    else if (mediaGeral < 600) {
        document.getElementById("resultMessage").innerHTML = "Sua média no ENEM de 2023 é de: " + mediaGeral + " pontos. No proximo ano será ainda melhor!";
    }

    else {
        document.getElementById("resultMessage").innerHTML = "Sua media do ENEM 2023 é de: " + mediaGeral + " pontos! Boa Sorte no SISU e Prouni!";
    }
});