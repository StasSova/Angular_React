import { Component, OnInit } from '@angular/core';
import { ShopCartService } from '../service/shop-cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  constructor(private cart: ShopCartService, private router: Router) {}
  ngOnInit(): void {}

  getCountItemInCart() {
    return this.cart.getTotalItems();
  }

  goToCart() {
    this.router.navigate(['cart']);
  }

  goToShop() {
    this.router.navigate(['']);
  }

  goToAdmin() {
    this.router.navigate(['admin']);
  }
}
