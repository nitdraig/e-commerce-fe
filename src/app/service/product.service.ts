import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getProducts(params: { limit: number; sort: string }): Observable<any[]> {
    const url = `${this.apiUrl}?limit=${params.limit}&sort=${params.sort}`;
    return this.http.get<any[]>(url);
  }
}
