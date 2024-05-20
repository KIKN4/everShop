import { Component } from '@angular/core';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { Product } from '../../shared/components/types/product';
import { PRODUCTS } from '../../mock-data';
import { FormsModule } from '@angular/forms';
import { ProductsFilterPipe } from '../../shared/pipes/products-filter.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCardComponent, FormsModule, ProductsFilterPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  products: Product[] = PRODUCTS;
  filteredProducts: Product[] = [...this.products];
  filterKey = '';
}
