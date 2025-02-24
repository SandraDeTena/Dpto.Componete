import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaquetacionBEMComponent } from './maquetacion-bem.component';

describe('MaquetacionBEMComponent', () => {
  let component: MaquetacionBEMComponent;
  let fixture: ComponentFixture<MaquetacionBEMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaquetacionBEMComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaquetacionBEMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
