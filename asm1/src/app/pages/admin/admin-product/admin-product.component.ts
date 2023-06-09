import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent {


  products: IProduct[] = [];
  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    }, error => console.log(error.message))
  }
  removeItem(id: any) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter(item => item.id !== id)
    })
    
  }
}
