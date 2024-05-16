import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FinaceService {

    private readonly API = 'https://server-node-transacao.onrender.com/transacao'

    constructor(private http: HttpClient) { }

    getBalance(): Observable<any>{
      return this.http.get(this.API);
    }

    postData(data:any): Observable<any>{
      return this.http.post(this.API, data);
    }
}
