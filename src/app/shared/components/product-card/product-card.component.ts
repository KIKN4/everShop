import { Component, Input } from '@angular/core';
import { Product } from '../types/product';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;
}
