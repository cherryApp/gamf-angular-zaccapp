import { Component, inject } from '@angular/core';
import { ConsumeService } from 'src/app/service/consume.service';

@Component({
  selector: 'app-drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.scss']
})
export class DrinkListComponent {

  consumeService = inject(ConsumeService);

  consumeList$ = this.consumeService.list$;

  getWeekDayName(timeStamp: number): string {
    const dayNames = ['Vasárnap', 'Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek', 'Szombat', 'Vasárnap'];
    const date = new Date(timeStamp);
    const weekDay = date.getDay();
    return dayNames[weekDay];
  }

  getFormattedDate(timeStamp: number): string {
    return new Intl.DateTimeFormat('hu-HU').format(timeStamp);
  }

}
