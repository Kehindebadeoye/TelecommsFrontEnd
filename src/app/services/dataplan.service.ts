import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dataplan } from '../models/dataplan';


const apiUrl = "*******"

@Injectable({
  providedIn: 'root'
})
export class DataplanService {

  constructor(private http:HttpClient) { }


  getDataplan(): Observable<Dataplan[]>{

    return this.http.get<Dataplan[]>(apiUrl);

  }
}
