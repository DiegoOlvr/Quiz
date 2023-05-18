const QUESTOES_QUIZ = [
    {
        questao: "Melhor fruta?",
        a: "Banana",
        b: "Maça",
        c: "Morango",
        d: "Uva",
        correta: "c"
    },
    {
        questao: "Melhor escola de programação?",
        a: "Baggius",
        b: "Ctrl + Play",
        c: "Happy Code",
        d: "Código feliz",
        correta: "b"
    },
    {
        questao: "Quem ganhou a copa em 2010?",
        a: "França",
        b: "Espanha",
        c: "Brasil",
        d: "Alemanha",
        correta: "b"
    },
    {
        questao: "Melhor linguagem de programação?",
        a: "PHP",
        b: "Java",
        c: "JavaScript",
        d: "Python",
        correta: "d"
    },
    {
        questao: "Professor mais legal?",
        a: "Diego",
        b: "Tiego",
        c: "Diogo",
        d: "Reinaldo",
        correta: "a"
    },
]

const quiz = document.getElementById("quiz");
const resp_elementos = document.querySelectorAll(".resposta");
const texto_a = document.getElementById("text_a");
const texto_b = document.getElementById("text_b");
const texto_c = document.getElementById("text_c");
const texto_d = document.getElementById("text_d");
const questao_elemento = document.getElementById("questao");
const botao = document.getElementById("submit");


let questao_atual = 0;
let corretas = 0;


carrega_quiz();

function carrega_quiz() {
    desmarcar_respostas();
    const info_questao = QUESTOES_QUIZ[questao_atual];

    questao_elemento.innerText = info_questao.questao;
    texto_a.innerText = info_questao.a;
    texto_b.innerText = info_questao.b;
    texto_c.innerText = info_questao.c;
    texto_d.innerText = info_questao.d;
}


function pegar_resposta() {
    let resp = undefined;

    resp_elementos.forEach((resp_el) => {

        if (resp_el.checked) {
            resp = resp_el.id;
            console.log(resp);
        }
    }
    );
    return resp;
}

// Desmarcar opções
function desmarcar_respostas() {
    resp_elementos.forEach((resp_el) => {
        resp_el.checked = false;
    });
}

// Avançar questionário
botao.addEventListener("click", () => {
    const answer = pegar_resposta();
    const total_de_questoes = QUESTOES_QUIZ.length
    if (answer) {
        if (answer === QUESTOES_QUIZ[questao_atual].correta) {
            corretas++;
        }
        questao_atual++;
        if (questao_atual < total_de_questoes) {
            carrega_quiz();
        }
        else {
            quiz.innerHTML = `<h1>Você acertou ${corretas}/${total_de_questoes} questões!</h1>
            <button onclick="location.reload()">Recomeçar</button>`;
        }
    }

})
