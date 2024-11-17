import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Landmark } from './types/landmark';


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getLandmarks() {
   const api = environment.baseUrl

    return this.http.get<Landmark>(api);
  }
}
