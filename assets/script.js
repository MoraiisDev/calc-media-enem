// O usuário deve preencher cada campo de nota e peso respectivo
// O algoritmo deve:
// *   Guardar o valor de cada nota
// *   Guardar o valor de cada peso
// *   Multiplicar o valor da nota e peso respectivo
// *   Somar todos os resultados e dividí-los por n número de notas
// *   Retornar a mensagem no console com a media ponderada dos vestibulandos
// *   Em uma refatoração: Procurar melhorar a lógica e retornar a mensagem na tela para o usuário

function getNotaPeso(idNota, idPeso) {
    const nota = parseFloat(document.querySelector(idNota).value, 10);
    const peso = parseInt(document.querySelector(idPeso).value, 10);
    return { nota, peso };
}

function validarEntradas(notasPesos) {
    for (const { nota, peso } of notasPesos) {
        if (isNaN(nota) || isNaN(peso)) {
            return "Por favor, insira valores válidos para todas as notas e pesos.";
        }
        if (peso > 5) {
            return "O peso máximo é 5! Insira um valor menor.";
        }
        if (nota > 1000) {
            return "A nota máxima é 1000! Insira um valor menor.";
        }
    }
    return null;
}

const calcMedia = document.querySelector('#calcPrincipal');
calcMedia.addEventListener("click", function (e) {
    e.preventDefault();

    const notasPesos = [
        getNotaPeso('#notare', '#pesore'),
        getNotaPeso('#notacn', '#pesocn'),
        getNotaPeso('#notach', '#pesoch'),
        getNotaPeso('#notalc', '#pesolc'),
        getNotaPeso('#notamt', '#pesomt')
    ];

    const erro = validarEntradas(notasPesos);
    if (erro) {
        document.getElementById("resultMessage").innerHTML = erro;
    } else {
        const mediaPeso = notasPesos.reduce((acc, { peso }) => acc + peso, 0);
        const mediaGeral = Math.round(
            notasPesos.reduce((acc, { nota, peso }) => acc + nota * peso, 0) / mediaPeso
        );

        if (mediaGeral < 600) {
            document.getElementById("resultMessage").innerHTML = "Sua média no ENEM de 2023 é de: " + mediaGeral + " pontos. No próximo ano será ainda melhor!";
        } else {
            document.getElementById("resultMessage").innerHTML = "Sua média do ENEM é de: " + mediaGeral + " pontos! Boa Sorte no SISU e Prouni!";
        }
    }
});
