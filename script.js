//[ ] Alterar o layout do jogo..
//    [ ] adicionar mais cartas e
//    [ ] o tema será LA CASA DE PAPEL.
//[ ]  Adicionar o botão recomeçar

// aqui estou criando uma carta com todas as características de um personagem
var carta1 = {
  nome: "Tóquio",
  // criei um objeto dentro do objeto carta1
  imagem:
    "https://observatoriodocinema.uol.com.br/wp-content/uploads/2020/09/Ursula-Corbero-La-Casa-de-Papel-1200x800-1.jpg",
  atributos: {
    inteligencia: 8,
    habilidade: 8,
    resistencia: 7
  }
};

var carta2 = {
  nome: "Professor",
  imagem:
    "https://i.pinimg.com/736x/b2/59/34/b25934ca93b53f9edcd59f7b6750223f.jpg",
  atributos: {
    inteligencia: 10,
    habilidade: 8,
    resistencia: 5
  }
};

var carta3 = {
  nome: "Berlín",
  imagem: "https://s.ebiografia.com/img/pe/dr/pedro_alonso.jpg",
  atributos: {
    inteligencia: 8,
    habilidade: 6,
    resistencia: 4
  }
};
var carta4 = {
  nome: "Lisboa",
  imagem: "https://img.r7.com/images/elenco-la-casa-de-papel-18042018223323712",
  atributos: {
    inteligencia: 7,
    habilidade: 5,
    resistencia: 4
  }
};
var carta5 = {
  nome: "Rio",
  imagem:
    "https://conteudo.imguol.com.br/c/entretenimento/c8/2018/07/06/miguel-herran-e-rio-de-la-casa-de-papel-1530888631848_v2_450x450.jpg",
  atributos: {
    inteligencia: 5,
    habilidade: 5,
    resistencia: 8
  }
};

var carta6 = {
  nome: "Nairóbi",
  imagem: "https://pbs.twimg.com/media/EAzv69MW4AABGIe.jpg",
  atributos: {
    inteligencia: 8,
    habilidade: 9,
    resistencia: 8
  }
};

var carta7 = {
  nome: "Denver",
  imagem:
    "https://images.rfm.sapo.pt/denver_de_la_casa_de519892d3_destaque_2col.jpg",
  atributos: {
    inteligencia: 7,
    habilidade: 8,
    resistencia: 7
  }
};
var carta8 = {
  nome: "Estocolmo",
  imagem:
    "https://i.pinimg.com/originals/d5/96/7d/d5967db885ec2f85dd4c5a1ff957eccb.jpg",
  atributos: {
    inteligencia: 6,
    habilidade: 6,
    resistencia: 5
  }
};
var carta9 = {
  nome: "Helsinki",
  imagem:
    "https://cdn.mensagenscomamor.com/content/images/p000026855.jpg?v=1&w=696&h=392&c=1",
  atributos: {
    inteligencia: 6,
    habilidade: 5,
    resistencia: 5
  }
};
var carta10 = {
  nome: "Oslo",
  imagem:
    "https://www.estrelando.com.br/uploads/2018/06/29/la-casa-de-papel--1530293716.jpg",
  atributos: {
    inteligencia: 5,
    habilidade: 4,
    resistencia: 6
  }
};
var carta11 = {
  nome: "Ángel Rubio",
  imagem:
    "http://pm1.narvii.com/6828/5f1abadd890922f837e404fdc1b0d6da915e3e34v2_00.jpg",
  atributos: {
    inteligencia: 7,
    habilidade: 6,
    resistencia: 5
  }
};

var carta12 = {
  nome: "Palermo",
  imagem:
    "https://cdn.ome.lt/-C7-3uuCz73c31hiI-Yk-Ol6WGM=/1200x630/smart/extras/conteudos/palermo.jpg",
  atributos: {
    inteligencia: 7,
    habilidade: 8,
    resistencia: 10
  }
};
var carta13 = {
  nome: "Inspetora Alicia Sierra",
  imagem:
    "https://i.pinimg.com/originals/4e/50/25/4e5025e1d3bab7c0452ff34716b02fc7.jpg",
  atributos: {
    inteligencia: 8,
    habilidade: 7,
    resistencia: 9
  }
};
var carta14 = {
  nome: "Gandía",
  imagem: "https://pbs.twimg.com/media/EVDGwA8XkAcWR9Z.jpg",
  atributos: {
    inteligencia: 7,
    habilidade: 10,
    resistencia: 9
  }
};
var carta15 = {
  nome: "Coronel Tamayo",
  imagem: "https://i.redd.it/nn0nisg2zqs41.png",
  atributos: {
    inteligencia: 8,
    habilidade: 6,
    resistencia: 6
  }
};
var carta16 = {
  nome: "Arturo",
  imagem:
    "https://pbs.twimg.com/profile_images/1255249664938573832/0EfGbZ3U_400x400.jpg",
  atributos: {
    inteligencia: 5,
    habilidade: 6,
    resistencia: 4
  }
};
//aqui estamos colocando praticamente os objetos dentro de uma array
var cartas = [
  carta1,
  carta2,
  carta3,
  carta4,
  carta5,
  carta6,
  carta7,
  carta8,
  carta9,
  carta10,
  carta11,
  carta12,
  carta13,
  carta14,
  carta15,
  carta16
];
//console.log(cartas);
// dentro da memória do computador, vai existir um espacinho que vai guardar alguma coisa que vamos chamar de cartaMaquina ou cartaJogador. Sem dar o valor por enquanto.
var cartaMaquina;
var cartaJogador;

//FUNÇÕES
function sortearCarta() {
  //abaixo vou sortear carta da Máquina
  //essa variável vai sortear uma carta no intervalo do indice . O valor é um número inteiro.
  var numeroCartaMaquina = parseInt(Math.random() * cartas.length);
  // aqui vai gerar um índice aleatório (em azul eu estou chamando o resultado da variável acima)
  cartaMaquina = cartas[numeroCartaMaquina];
  //no console ele vai sortear uma carta aleatória quando eu clicar no botão sortear carta
  // console.log(cartaMaquina);

  //abaixo vou sortear carta do Jogador
  var numeroCartaJogador = parseInt(Math.random() * cartas.length);
  //abaixo vou criar uma condição que ENQUANTO (while) a carta máquina for igual a carta jogador, ele tem que sortear de novo
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * cartas.length);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  //puxei o ID do botão  SORTEAR CARTA.  Disabled é uma propriedade. Ele vai desabilitar o botão sortear depois que ele executar os comandos acima
  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  document.getElementById("btnRecomecar").disabled = false;
  //aqui vai ser para aparecer a carta do jogador. No final de sortear
  exibirCartaJogador();
}

//a função abaixo é para executar quando eu clicar no botão Sortear para eu escolher os atributos
function exibirOpcoes() {
  var opcoes = document.getElementById("opcoes");
  var opcoesTexto = "";

  //para cada elemento desse dentro de uma lista, você vai fazer tal coisa. Vamos querer percorrer cada um dos atributos que tem dentro da nossa carta. Nessa função vamos abrir as opções para o jogador selecionar.
  for (var atributo in cartaJogador.atributos) {
    //aqui vou imprimir as opções de atributo. Type=radio vai abrir uma bolinha para selecionar a opção. O fato de ter colocado += quer dizer que ele vai somar todos os textos dos atributos
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo;
  }
}

// criar uma função que obtém qual o atributo que foi selecionado lá na tela
function obtemAtributoSelecionado() {
  //                        aqui ele vai puxar os nomes de todos os atributos
  var radioAtributos = document.getElementsByName("atributo");

  //ele vai especificar qual radioAtributo que foi selecionado lá na tela
  for (var i = 0; i < radioAtributos.length; i++) {
    //se o radio que estamos verificando neste momento, se ele estiver checado, vai ser verdadeiro
    if (radioAtributos[i].checked == true) {
      //queremos devolver para a função jogar (que ela foi chamada quando escrevemos obtemAtributoSelecionado ). qual é de fato o atributo que foi selecionado.
      return radioAtributos[i].value;
    }
  }
}
// função que será invocada quando clicar no botão de Jogar
function jogar() {
  //                            invoquei a função acima
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");

  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'> <strong>Venceu!</p>";
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado =
      "<p class='resultado-final'> <strong> Você Perdeu! <br> A carta do seu inimigo é maior </p>";
  } else {
    htmlResultado = "<p class='resultado-final'><strong> Deu empate! </p>";
  }
  // console.log(divResultado);
  divResultado.innerHTML = htmlResultado;

  document.getElementById("btnJogar").disabled = true;
  exibirCartaMaquina();
}

//aqui nessa função, criei para exibir os dados da carta jogador
function exibirCartaJogador() {
  //aqui criei uma variável para pegar o ID carta-jogador
  var divCartaJogador = document.getElementById("carta-jogador");
  //aqui vamos colocar a imagem da carta jogador dentro do card (moldura). Aqui vamos passar no formato CSS - para que ele entenda esse style. O $ vai indicar que o código que vem a partir daí vai ser de JS
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  //divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"; - mesma forma de escrever o código acima
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'; //código da moldura que peguei no HTML
  // vamos criar as opções dentro da carta - abrimos a div e vamos fechar no var nome
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  //aqui eu copiei e colei da função exibirOpcoes
  var opcoesTexto = "";

  // para cada elemento dentro da lista escrever na tela
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  //aqui vamos imprimir o nome da carta na parte superior
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"; //abri a div na var tagHTML
}
function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";
  var opcoesTexto = "";

  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }

  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}
//aqui vou criar a função recomeçar, pois assim que a máquina joga, eu quero jogar novamente
function recomecar() {
  // estou chamando essas variáveis
  var divCartaJogador = document.getElementById("carta-jogador");
  var divCartaMaquina = document.getElementById("carta-maquina");
  var divResultado = document.getElementById("resultado");

  //estou fazendo com que o card suma depois que eu clicar o recomeçar
  divCartaJogador.style.backgroundImage = `url(0)`;
  divCartaJogador.innerHTML = "";
  divCartaMaquina.style.backgroundImage = `url(0)`;
  divCartaMaquina.innerHTML = "";
  divResultado.innerHTML = "";

  //aqui estou desabilitando o botão recomeçar e habilitando o botão sortear
  document.getElementById("btnRecomecar").disabled = true;
  document.getElementById("btnSortear").disabled = false;
}