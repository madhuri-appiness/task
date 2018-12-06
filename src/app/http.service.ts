import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  getkeyword(data){
    return this.http.post('https://demo4044296.mockable.io/getKeywords',data)
  }
}
