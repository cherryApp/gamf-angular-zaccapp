import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Cons, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Consume } from '../model/consume';

// Consume CRUD: Create, Read, Update, Delete
@Injectable({
  providedIn: 'root'
})
export class ConsumeService {

  http: HttpClient = inject(HttpClient);

  apiUrl: string = environment.apiUrl;

  entityName: string = 'consume';

  list$: Consume[] = [
    {id: 1, type: 'simple', user: 1, timeStamp: new Date().getTime(), payed: false},
    {id: 2, type: 'simple', user: 1, timeStamp: new Date().getTime(), payed: false},
    {id: 3, type: 'simple', user: 1, timeStamp: new Date().getTime(), payed: false},
    {id: 4, type: 'simple', user: 1, timeStamp: new Date().getTime(), payed: false},
    {id: 5, type: 'simple', user: 1, timeStamp: new Date().getTime(), payed: false},
  ];

  constructor() { }

  getAll(): Observable<Consume[]> {
    return this.http.get<Consume[]>(`${this.apiUrl}${this.entityName}`);
  }
  
  get(id: number): Observable<Consume> {
    return this.http.get<Consume>(`${this.apiUrl}${this.entityName}/${id}`);
  }
  
  create(consume: Consume): Observable<Consume> {
    return this.http.post<Consume>(
      `${this.apiUrl}${this.entityName}`,
      consume
    );
  }
  
  update(consume: Consume): Observable<Consume> {
    return this.http.patch<Consume>(
      `${this.apiUrl}${this.entityName}/${consume.id}`,
      consume
    );
  }

  delete(id: number): Observable<Consume> {
    return this.http.delete<Consume>(`${this.apiUrl}${this.entityName}/${id}`);
  }

}
