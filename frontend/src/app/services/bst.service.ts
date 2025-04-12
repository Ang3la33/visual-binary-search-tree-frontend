import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BstService {
  treeData: any = null;

  constructor(private http: HttpClient) {}

  createTree(numbers: number[]): Observable<any> {
    return this.http.post<any>(
      'http://localhost:8081/api/trees/process-numbers',
      numbers
    );
  }
}

