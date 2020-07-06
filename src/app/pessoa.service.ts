import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private apiVersion = environment.apiVersion;
  private baseUrl = `http://localhost:8080/api/${this.apiVersion}/pessoas`;

  constructor(private http: HttpClient) { }

  getPessoa(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  criaPessoa(pessoa: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, pessoa);
  }

  atualizaPessoa(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  removePessoa(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getListaPessoas(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
