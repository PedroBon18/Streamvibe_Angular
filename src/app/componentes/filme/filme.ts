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

filme1 = {
  nome: "Shichinin No Samurai",
  imagem: "shichinin no samurai.jpg",
  sinopse:"Em meio ao Japão feudal, um vilarejo de camponeses pobres, cansados de serem saqueados por bandidos, contrata sete samurais para protegê-los. Com poucos recursos, os samurais treinam os camponeses para defender suas casas e juntos preparam a vila para o ataque iminente. O filme explora honra, sacrifício e a luta pela dignidade em um mundo de injustiças, enquanto cada samurai encontra seu próprio propósito ao proteger aqueles que não podem se proteger sozinhos.",
  favorito: false
}

// filme2 = {
//   nome: "Dragon Ball Super: Broly",
//   imagem: "/public/DBS.jpg",
//   sinopse:"Goku e Vegeta encontram um novo e poderoso Saiyajin chamado Broly, que vive isolado no planeta Vampa com seu pai Paragus. Quando Broly é trazido à Terra por Freeza, uma batalha intensa se inicia, revelando o poder sem limites de Broly e testando os limites de Goku e Vegeta, enquanto segredos sobre o passado dos Saiyajins são revelados."
// }

// filme3 = {
//   nome: "Spider Man",
//   imagem: "/public/Spide-Man_Poster.jpg.jpg",
//   sinopse:"Peter Parker, um estudante tímido, é picado por uma aranha geneticamente modificada e ganha habilidades sobre-humanas. Após a morte de seu tio Ben, Peter decide usar seus poderes para combater o crime como o Homem-Aranha, enquanto enfrenta desafios pessoais e o vilão Duende Verde que ameaça a cidade de Nova York."
// }

}


