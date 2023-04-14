import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { ConsumeService } from 'src/app/service/consume.service';

@Component({
  selector: 'app-consume-editor',
  templateUrl: './consume-editor.component.html',
  styleUrls: ['./consume-editor.component.scss']
})
export class ConsumeEditorComponent {

  ar: ActivatedRoute = inject(ActivatedRoute);

  consumeService = inject(ConsumeService);

  consume$ = this.ar.params.pipe(
    switchMap( params => this.consumeService.get(params['id']) )
  );

}
