import {Component, inject, input} from '@angular/core';
import {Product} from '../../../models/products.models';
import {CartService} from '../../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [],
  templateUrl: './cart-item.component.html',
  styles: ``
})
export class CartItemComponent {
  item = input.required<Product>();
  cartService = inject(CartService)
}