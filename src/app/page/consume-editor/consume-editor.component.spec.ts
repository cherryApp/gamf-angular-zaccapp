import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumeEditorComponent } from './consume-editor.component';

describe('ConsumeEditorComponent', () => {
  let component: ConsumeEditorComponent;
  let fixture: ComponentFixture<ConsumeEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumeEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumeEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
