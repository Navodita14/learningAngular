import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../Models/product';
import { catchError, map, Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  error = new Subject<string>();
  constructor(private http: HttpClient) {}

  createProduct(products: Product[]) {
    console.log(products);
    const header = new HttpHeaders({ myHeader: 'Hiiiii' });
    this.http
      .post<{ name: string }>(
        'https://learningangular-42649-default-rtdb.firebaseio.com/products.json',
        products,
        { headers: header }
      )
      .subscribe(
        (res) => {
          console.log(res);
          this.fetchProduct();
        },
        (err) => {
          this.error.next(err.message);
        }
      );
  }

  fetchProduct() {
    const header = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('token', 'token');

    const params= new HttpParams().set('print','pretty');
    return this.http
      .get<{ [key: string]: Product }>(
        'https://learningangular-42649-default-rtdb.firebaseio.com/products.json',
        { headers: header , 'params':params}
      )
      .pipe(
        map((res) => {
          const products = [];
          for (const key in res) {
            if (res.hasOwnProperty(key)) {
              products.push({ ...res[key], id: key });
            }
          }
          return products;
        }),
        catchError((err) => {
          console.log(err);
          return throwError(err);
        })
      );
  }

  deleteProduct(id) {
    let header= new HttpHeaders();
    
    header= header.append('myHeader1','Value1')
    header= header.append('myHeader2','Value2')

    
    this.http
      .delete(
        'https://learningangular-42649-default-rtdb.firebaseio.com/products/' +
          id +
          '.json', {'headers':header }
      )
      .subscribe();
  }

  deleteAllProduct() {
    this.http
      .delete(
        'https://learningangular-42649-default-rtdb.firebaseio.com/products.json'
      )
      .subscribe();
  }

  updateProduct(id: string, value: Product[]) {
    this.http
      .put(
        'https://learningangular-42649-default-rtdb.firebaseio.com/products/' +
          id +
          '.json',
        value
      )
      .subscribe();
  }
}
