import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product {
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

   private baseUrl='http://localhost:5001/api'

  constructor(private http :HttpClient) { }

 addProduct(product: Product, file?: File): Observable<Product> {
    const formData = new FormData();

    const token = localStorage.getItem('token'); 
  const headers = new HttpHeaders({
    Authorization: `Bearer ${token || ''}`
  });

  formData.append('name', product.name);
  formData.append('price', product.price.toString());
  formData.append('description', product.description);
  formData.append('category', product.category);
  formData.append('available', 'true'); // or product.available if you add field

  if (file) {
    formData.append('image', file);
  } else {
    formData.append('image', product.image);
  }

  return this.http.post<Product>(`${this.baseUrl}/products/addProduct`, formData, {headers});
  }


  getAllProducts():Observable<any>{
    return this.http.get(`${this.baseUrl}/products/getAllProducts`)
  }


  deleteProduct(id: number): Observable<any> {
  const token = localStorage.getItem('token'); // ensure token exists
  const headers = new HttpHeaders({
    Authorization: `Bearer ${token || ''}`
  });

  return this.http.delete(`${this.baseUrl}/products/deleteProduct/${id}`, { headers });
}


}
