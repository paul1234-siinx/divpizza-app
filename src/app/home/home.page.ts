import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  catalogo:Array<Object> = []


  ionViewDidEnter(){
    console.log("EXECUTOU O VIEW DI ENTER")
    this.catalogo.push({
      nome: 'pizza mineira',
      descricao:"queijo, catupiry, lombo de porco, cogumelos, mangericão",
      preco:'R$72,00',
    })
  }
  
}
