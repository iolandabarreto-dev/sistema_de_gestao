let opcao;
const turma = [];
let nomeTurma = "";

//Exibe o menu e verifica a opção usando if/else

do {
  opcao = prompt(
    "Digite a opção desejada:\n" +
      "1 - Cadastrar Turma e Alunos\n" +
      "2 - Lançar Notas\n" +
      "3 - Cálculo e Exibição de Média\n" +
      "4 - Sair"
  );

  if (opcao === "1") {
    alert("Você escolheu:Cadastrar Turma e Aluno");
    cadastrarTurma();
  } else if (opcao === "2") {
    alert("Você escolheu: Lançar Notas");
    lancarNotas();
  } else if (opcao === "3") {
    alert("Você escolheu: Cálculo e Exibição de Média");
    calcularMedia();
  } else if (opcao === "4") {
    alert("Saindo do sistema... até logo!");
  } else {
    alert("Opção inválida! Tente novamente.");
  }
} while (opcao !== "4"); // repete enquanto o usuário não escolher "5"

// Funçoes utilizadas

function cadastrarTurma() {
  nomeTurma = prompt("Digite o nome da turma:");

  const quantidadeAlunos = Number(
    prompt("Digite a quantidade de alunos da turma:")
  );

  for (let i = 0; i < quantidadeAlunos; i++) {
    cadastrarAluno(i + 1);
  }
}

function cadastrarAluno(indice) {
  const nomeAluno = prompt("Digite o nome do aluno " + indice + ":");

  const aluno = {
    nome: nomeAluno,
    nota: 0,
  };

  turma.push(aluno);
}

function lancarNotas() {
  for (const aluno of turma) {
    const nota = Number(prompt("Digite a nota do aluno " + aluno.nome + ":"));

    aluno.nota = nota;
  }
}

function calcularMedia() {
  let somaNotas = 0;

  for (let aluno of turma) {
    somaNotas += aluno.nota;
  }

  const media = somaNotas / turma.length;

  window.alert("A média final da " + nomeTurma + " é: " + media.toFixed(2));
}
