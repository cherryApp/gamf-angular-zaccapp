import { Component, inject } from '@angular/core';
import { Consume } from 'src/app/model/consume';
import { ConsumeService } from 'src/app/service/consume.service';

@Component({
  selector: 'app-drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.scss']
})
export class DrinkListComponent {

  consumeService = inject(ConsumeService);

  consumeList$ = this.consumeService.getAll();

  getWeekDayName(timeStamp: number): string {
    const dayNames = ['Vasárnap', 'Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek', 'Szombat', 'Vasárnap'];
    const date = new Date(timeStamp);
    const weekDay = date.getDay();
    return dayNames[weekDay];
  }

  getFormattedDate(timeStamp: number): string {
    return new Intl.DateTimeFormat('hu-HU').format(timeStamp);
  }

  onRemoveConsume(consume: Consume): void {
    this.consumeService.delete(consume.id).subscribe(
      () => this.consumeList$ = this.consumeService.getAll()
    );
  }

}
