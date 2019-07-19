import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {IData} from './data';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _url: string = "/api/";
  constructor(private http: HttpClient) {}

    getdata() : Observable<IData[]>{
      return  this.http.get<IData[]>(this._url);
}
}
