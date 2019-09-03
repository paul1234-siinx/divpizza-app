import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private menu:ActionSheetController, private route:Router){}

  catalogo:Array<Object> = []


  ionViewDidEnter(){
    console.log("EXECUTOU O VIEW DI ENTER")
    this.listarCatalogo()
  }

  listarCatalogo() {
    this.catalogo = []
    const tamanhoDoBanco = localStorage.length
    for(let i = 0; i < tamanhoDoBanco; i++){
      
      const chaveAtual = localStorage.key(i)
      const pizzaString = localStorage.getItem(chaveAtual)
      const pizzaObjeto = JSON.parse(pizzaString)
      this.catalogo.push(pizzaObjeto)
    }
  }

  async exibirOpcoes(id) {
    console.log("clicou na opção: "+ id)
    let cricaoMenu = await this.menu.create({
      header: "Opçôes da pizza nº "+ id,
      buttons: [{
        text: "Editar Pizza",
        icon: "create",
        handler: () =>{
          this.route.navigate(['edit-pizza', id])
        }
      },{
        text: "Excluir pizza",
        icon: "trash",
        handler: () =>{
          console.log ("clicou em excluir")
          localStorage.removeItem(id)
          this.listarCatalogo()
        }
      }]
    })
    cricaoMenu.present()
  }
}
