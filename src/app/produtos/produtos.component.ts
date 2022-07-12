import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  menus = [1, 2, 3]

  menuItems: string[] = ["testando", "Teste"]




}
