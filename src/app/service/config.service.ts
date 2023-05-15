import { Injectable } from '@angular/core';

export interface ISelectOption {
  text: string;
  value: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  typeSelectOptions: ISelectOption[] = [
    {
      text: 'Espresso',
      value: 'espresso',
    },
    {
      text: 'Melange',
      value: 'melange',
    },
    {
      text: 'Cappuccino',
      value: 'cappuccino',
    },
    {
      text: 'Simple',
      value: 'simple',
    },
    {
      text: 'Double',
      value: 'double',
    },
  ];

  constructor() { }
}
