import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  constructor(
    private http:HttpClient
  ) { }

  getmoviesdata()
  {
    var dis =  this.http.get<any>('https://localhost:7100/api/Movie');
    return dis;
  }
}
