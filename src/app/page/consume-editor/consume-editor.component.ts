import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { Consume } from 'src/app/model/consume';
import { ConsumeService } from 'src/app/service/consume.service';

@Component({
  selector: 'app-consume-editor',
  templateUrl: './consume-editor.component.html',
  styleUrls: ['./consume-editor.component.scss']
})
export class ConsumeEditorComponent {

  ar: ActivatedRoute = inject(ActivatedRoute);

  router: Router = inject(Router);

  consumeService = inject(ConsumeService);

  consume$ = this.ar.params.pipe(
    switchMap( params => this.consumeService.get(params['id']) ),
    map( consume => {
      consume.date = this.formatDate(consume.timeStamp);
      return consume;
    })
  );

  formatDate(timeStamp: number): string {
    const date = new Date(timeStamp);
    const year = date.getFullYear();
    const month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth();
    const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    return `${year}-${month}-${day}`;
  }

  onUpdate(consume: Consume): void {
    consume.timeStamp = new Date(consume.date || 0).getTime();
    delete consume.date;
    this.consumeService.update(consume).subscribe(
      () => this.router.navigate(['/admin'])
    )
  }

}
