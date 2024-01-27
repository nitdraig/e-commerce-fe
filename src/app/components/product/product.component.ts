import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  searchTerm: string = '';
  productCount: number = 5;
  sortOrder: string = 'asc';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.updateProductCount();
  }

  obtenerProducts(): void {
    const params = {
      limit: this.productCount,
      sort: this.sortOrder,
    };

    this.productService.getProducts(params).subscribe((products) => {
      this.products = products;
    });
  }

  updateProductCount(): void {
    if (this.productCount > 0) {
      this.obtenerProducts();
    }
  }

  get filteredProducts(): any[] {
    return this.products.filter((product) =>
      product.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
