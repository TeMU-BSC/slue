import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getDataFromBackend(input: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/parse`, input);
  }
}
