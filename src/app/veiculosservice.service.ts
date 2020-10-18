import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class VeiculosserviceService {
  consultaveiculosUrl = 'http://localhost:8081/';
  constructor(private http: HttpClient) { }
  listar(placa){
    this.consultaveiculosUrl += placa;
    return this.http.get<any[]>(`${this.consultaveiculosUrl}`);
  }
}
