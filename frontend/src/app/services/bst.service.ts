import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BstService {
  private apiUrl = 'http://localhost:8081/process-numbers';

  constructor(private http: HttpClient) {}

  processNumbers(numbers: number[]): Observable<any> {
    return this.http.post<any>(this.apiUrl, numbers);
  }
}
