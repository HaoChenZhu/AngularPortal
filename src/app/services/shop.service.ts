import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Shop, ShopProduct } from '../models/shop.interface';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  private baseURL = "http://localhost:8080/server/shop"
  constructor(private http: HttpClient) { }

  getShops():Observable<Shop[]>{
    return this.http.get<Shop[]>(this.baseURL);
  }
  getShopProduct(name:string):Observable<any>{
    return this.http.get<ShopProduct>(`${this.baseURL}/products/${name}`)
  }
  
}
