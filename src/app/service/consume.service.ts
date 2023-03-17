import { Injectable } from '@angular/core';
import { Consume } from '../model/consume';

@Injectable({
  providedIn: 'root'
})
export class ConsumeService {

  list$: Consume[] = [
    {id: 1, type: 'simple', user: 1, timeStamp: new Date().getTime(), payed: false},
    {id: 2, type: 'simple', user: 1, timeStamp: new Date().getTime(), payed: false},
    {id: 3, type: 'simple', user: 1, timeStamp: new Date().getTime(), payed: false},
    {id: 4, type: 'simple', user: 1, timeStamp: new Date().getTime(), payed: false},
    {id: 5, type: 'simple', user: 1, timeStamp: new Date().getTime(), payed: false},
  ];

  constructor() { }
}
