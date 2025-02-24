import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesarrolloComponenteAngularComponent } from './desarrollo-componente-angular.component';

describe('DesarrolloComponenteAngularComponent', () => {
  let component: DesarrolloComponenteAngularComponent;
  let fixture: ComponentFixture<DesarrolloComponenteAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesarrolloComponenteAngularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesarrolloComponenteAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
