import { EventEmitter, Input } from '@angular/core';
import { Component, Output ,OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: IProduct[] = [];
  constructor(private productService: ProductService) {
  }
 ngOnInit(): void {
   this.productService.getProducts().subscribe(products => this.products = products)
 }
}