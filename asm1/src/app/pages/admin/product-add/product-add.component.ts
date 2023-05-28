import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {
  product: IProduct = {
    id : 0,
    name: "",
    img : "",
    price: 0
  }
  constructor(private productService: ProductService) {

  }
  onHandleSubmit() {
    this.productService.addProduct(this.product).subscribe(data => {
      console.log(data)
    })
  }
}