import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './componentes/header/header';
import { Footer } from './componentes/footer/footer';
import { Filme } from './componentes/filmes/filmes';

@Component({
  selector: 'app-root',
  imports: [ Header, Footer, Filme],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'streamvibe';
}
