import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { Consume } from 'src/app/model/consume';
import { ConfigService } from 'src/app/service/config.service';
import { ConsumeService } from 'src/app/service/consume.service';

@Component({
  selector: 'app-consume-editor',
  templateUrl: './consume-editor.component.html',
  styleUrls: ['./consume-editor.component.scss']
})
export class ConsumeEditorComponent {

  ar: ActivatedRoute = inject(ActivatedRoute);

  config = inject(ConfigService);

  router: Router = inject(Router);

  consumeService = inject(ConsumeService);

  typeOptions = this.config.typeSelectOptions;

  consume$ = this.ar.params.pipe(
    switchMap( params => this.consumeService.get(params['id']) ),
    map( consume => {
      consume.date = this.formatDate(consume.timeStamp);
      return consume;
    })
  );

  getVisible(control: AbstractControl): {[key: string]: any} {
    return {
      visibility: control?.invalid ? 'visible' : 'hidden',
    };
  }

  formatDate(timeStamp: number): string {
    const date = new Date(timeStamp);
    const year = date.getFullYear();
    const month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth();
    const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    return `${year}-${month}-${day}`;
  }

  onUpdate(consume: Consume): void {
    consume.timeStamp = new Date(consume.date || 0).getTime();
    consume.payed = (typeof consume.payed === 'string')
                      ? (consume.payed === 'true' ? true : false)
                      : consume.payed;
    delete consume.date;
    this.consumeService.update(consume).subscribe(
      () => this.router.navigate(['/admin'])
    )
  }

}
