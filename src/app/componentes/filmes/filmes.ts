import { Component } from '@angular/core';

@Component({
  selector: 'app-filme',
  imports: [],
  templateUrl: './filme.html',
  styleUrl: './filme.css'
})
export class Filme {


alternarFavorito() {
  this.filme1.favorito = !this.filme1.favorito
}

//dados mockados
filme1 = {
  nome: "Shichinin No Samurai",
  imagem: "shichinin no samurai.jpg",
  sinopse:"Em meio ao Japão feudal, um vilarejo de camponeses pobres, cansados de serem saqueados por bandidos, contrata sete samurais para protegê-los. Com poucos recursos, os samurais treinam os camponeses para defender suas casas e juntos preparam a vila para o ataque iminente. O filme explora honra, sacrifício e a luta pela dignidade em um mundo de injustiças, enquanto cada samurai encontra seu próprio propósito ao proteger aqueles que não podem se proteger sozinhos.",
  genero: "Ação",
  favorito: false
}

filme2 = {
  nome: "Dragon Ball Super: Broly",
  imagem: "DBS.jpg",
  sinopse:"Goku e Vegeta encontram um novo e poderoso Saiyajin chamado Broly, que vive isolado no planeta Vampa com seu pai Paragus. Quando Broly é trazido à Terra por Freeza, uma batalha intensa se inicia, revelando o poder sem limites de Broly e testando os limites de Goku e Vegeta, enquanto segredos sobre o passado dos Saiyajins são revelados.",
  genero: "Anime",
  favorito: false
}

filme3 = {
  nome: "Spider Man",
  imagem: "Spide-Man_Poster.jpg.jpg",
  sinopse:"Peter Parker, um estudante tímido, é picado por uma aranha geneticamente modificada e ganha habilidades sobre-humanas. Após a morte de seu tio Ben, Peter decide usar seus poderes para combater o crime como o Homem-Aranha, enquanto enfrenta desafios pessoais e o vilão Duende Verde que ameaça a cidade de Nova York.",
  genero: "Ação",
  favorito: false
}

filme4 = {
  nome: "my hero academia dois heróis",
  imagem: "my hero academia dois heróis.jpg",
  sinopse:"All Might e Deku aceitam um convite para visitar a Ilha I, onde está acontecendo a exposição de tecnologia mais importante do mundo. Lá, eles lutam contra um vilão que invade o sistema de segurança e toma a ilha toda como refém.",
  genero: "Anime",
  favorito: false
}

filme5 = {
  nome: "My Hero Academia Heroes Rising",
  imagem: "My_Hero_Academia_-_Heroes_Rising.jpg",
  sinopse:"A turma 1-A visita a Ilha Nabu, onde finalmente conseguem fazer um trabalho de heróis de verdade. O lugar é tão tranquilo que parece férias — até serem atacados por um vilão com uma individualidade estranhamente familiar! Agora, Deku e seus amigos são a única esperança da ilha.",
  genero: "Anime",
  favorito: false
}

filme6 = {
  nome: "KonoSuba: Legend of Crimson",
  imagem: "konosuba_filme.jpg",
  sinopse:"O filme KonoSuba: Legend of Crimson acompanha Kazuma e seu grupo, Aqua, Megumin e Darkness, em uma viagem para a Vila do Demônio Carmesim, lar de Megumin e sua irmã, Yunyun. Lá, eles enfrentam uma ameaça vinda do exército do Rei Demônio, enquanto exploram a terra natal de Megumin",
  genero: "Comedia",
  favorito: false
}

filme7 = {
  nome: "Jujutsu Kaisen 0",
  imagem: "jujutusu_kaisen_0.jpg",
  sinopse:"O jovem Yuta Okkotsu ganha o controle de um espírito extremamente poderoso, então um grupo de feiticeiros o matriculam na Tokyo Prefectural Jujutsu High School, para ajudá-lo a controlar esse poder e também para ficar de olho nele.",
  genero: "Ação",
  favorito: false
}

filme8 = {
  nome: "vingadores era de ultron",
  imagem: "vingadores era de ultron.jpg",
  sinopse:"Ao tentar proteger o planeta de ameaças, Tony Stark constrói um sistema de inteligência artificial que cuidaria da paz mundial. O projeto acaba dando errado e gera o nascimento do Ultron. Com o destino da Terra em jogo,",
  genero: "Ação",
  favorito: false
}
}


