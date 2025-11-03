import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempateDrivenFormsComponent } from './tempate-driven-forms.component';

describe('TempateDrivenFormsComponent', () => {
  let component: TempateDrivenFormsComponent;
  let fixture: ComponentFixture<TempateDrivenFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TempateDrivenFormsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempateDrivenFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
