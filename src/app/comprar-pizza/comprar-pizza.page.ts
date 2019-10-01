import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comprar-pizza',
  templateUrl: './comprar-pizza.page.html',
  styleUrls: ['./comprar-pizza.page.scss'],
})
export class ComprarPizzaPage implements OnInit {

  idPizza;
  nomePizza;
  descricaoPizza;
  precoPizza;
  dividir = 1;
  precoPizzaFixo;

  constructor(private activatedRoute:ActivatedRoute) {}

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.idPizza = this.activatedRoute.snapshot.params.id
    let pizzaString = localStorage.getItem(this.idPizza)
    let pizzaObjeto = JSON.parse(pizzaString)
    this.descricaoPizza = pizzaObjeto.descricaoPizza;
    this.nomePizza = pizzaObjeto.nomePizza;
    this.precoPizza = pizzaObjeto.precoPizza;
    this.precoPizzaFixo = this.precoPizza;
  }

  incrementar(){
    this.dividir++
    this.atualizarPreco()
    
  }
  decrementar(){
    if(this.dividir > 1){
    this.dividir--
    this.atualizarPreco()
    }
  }
  atualizarPreco() {
      this.precoPizza = (parseFloat(this.precoPizzaFixo)/this.dividir).toFixed(2)
  }
  atualizarComRange(){
    this.atualizarPreco()
  }

}
