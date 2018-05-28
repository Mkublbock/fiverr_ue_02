import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenModel } from '../models/token.model';


@Injectable()
export class AppLoadService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  checkTokenExpiration() {
    const token = JSON.parse(localStorage.getItem('token'));
    this.http.post('http://localhost:8081/token', {'token': token}, this.httpOptions).subscribe(data => {
      console.log(data);
    }, response => {
      console.log(response.error);
    });
  }
}



