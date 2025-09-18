import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Product } from './Models/product';
import { map, Subscription } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductsService } from './Services/products.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular-http';
  allProducts: Product[] = [];
  isFetching: boolean = false;
  editMode: boolean = false;
  currentProductId: string;
  errorMessage: string = null;
  errorSub: Subscription;
  @ViewChild('productsForm') form:NgForm;

  constructor(private http: HttpClient, private productService: ProductsService) {}

  ngOnInit(): void {
    this.fetchProducts();
    this.errorSub=this.productService.error.subscribe((message)=>{
      this.errorMessage=message
    })
  }
  onProductCreate(products: Product[]) {
    if(!this.editMode){
      this.productService.createProduct(products);
    }else{
      this.productService.updateProduct(this.currentProductId,products)
    }
  }

  private fetchProducts() {
    this.isFetching=true
    this.productService.fetchProduct().subscribe((res)=>{
      this.allProducts=res;
      this.isFetching=false
    }, (err)=>{
      this.errorMessage= err.message;
      // alert(this.errorMessage)
    })
  }

  onDeleteProduct(val: any) {
    this.productService.deleteProduct(val)
  }
  onEditClicked(id: string) {
    this.currentProductId=id;
    let currentProduct=this.allProducts.find((product)=>{
      return product.id===id
    })

    // console.log(currentProduct);
    

    this.form.setValue({
      pName:currentProduct.pName,
      desc:currentProduct.desc,
      price:currentProduct.price
    })

    this.editMode=true;

    
    
  }
  onProductsFetch() {
    this.fetchProducts()
  }
  onDeleteAllProducts() {
    this.productService.deleteAllProduct()
  }
 
  ngOnDestroy(): void {
    this.errorSub.unsubscribe()
  }

}
