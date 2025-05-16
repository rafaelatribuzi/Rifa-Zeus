//iniciaremos com a lista de participantes do evento


const participantes = [
  { nome: "Ana Clara", email: "ana.clara@email.com" },
  { nome: "Bruno Lima", email: "bruno.lima@email.com" },
  { nome: "Carla Souza", email: "carla.souza@email.com" },
  { nome: "Daniel Oliveira", email: "daniel.oliveira@email.com" },
  { nome: "Eduarda Martins", email: "eduarda.martins@email.com" },
  { nome: "Felipe Silva", email: "felipe.silva@email.com" },
  { nome: "Gabriela Rocha", email: "gabriela.rocha@email.com" },
  { nome: "Henrique Ramos", email: "henrique.ramos@email.com" },
  { nome: "Isabela Ferreira", email: "isabela.ferreira@email.com" },
  { nome: "João Pedro", email: "joao.pedro@email.com" },
  { nome: "Karen Dias", email: "karen.dias@email.com" },
  { nome: "Lucas Costa", email: "lucas.costa@email.com" },
  { nome: "Mariana Alves", email: "mariana.alves@email.com" },
  { nome: "Nathan Cardoso", email: "nathan.cardoso@email.com" },
  { nome: "Olívia Teixeira", email: "olivia.teixeira@email.com" },
  { nome: "Paulo Ricardo", email: "paulo.ricardo@email.com" },
  { nome: "Quésia Lima", email: "quesia.lima@email.com" },
  { nome: "Rafael Torres", email: "rafael.torres@email.com" },
  { nome: "Sara Monteiro", email: "sara.monteiro@email.com" },
  { nome: "Tiago Mendes", email: "tiago.mendes@email.com" }
];

//iremos agora criar os elementos que farão interação com o usuário

const btnsSortear = document.querySelectorAll(".btn-sortear");
const divSorteio = document.querySelector(".sorteio"); // essa é a classe que vai sumir
const divResultado = document.querySelector(".texto-sorteio"); // é a classe que vai aparecer
const nomeSorteio = divResultado.querySelector("#nome-sorteado"); 
const emailSorteio = divResultado.querySelector("#email-sorteado");


// função de sortear um nome aleatoriamente


function sortearParticipante() {
  const list = Math.floor(Math.random() * participantes.length); //aqui usar o length para percorrer tudo
  const sorteado = participantes[list];

// muda os dados na tela de resultado
  nomeSorteio.textContent = `${list + 1} - ${sorteado.nome.toUpperCase()}`;
  emailSorteio.textContent = sorteado.email.toUpperCase();

// aparecer e sumir com os dados na tela
  divSorteio.style.display = "none";
  divResultado.style.display = "block";


}

// Aplica o evento a todos os botões com id="button-sortear"
btnsSortear.forEach(btn => {
  btn.addEventListener("click", sortearParticipante);
});











