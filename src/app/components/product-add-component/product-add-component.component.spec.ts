import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAddComponentComponent } from './product-add-component.component';

describe('ProductAddComponentComponent', () => {
  let component: ProductAddComponentComponent;
  let fixture: ComponentFixture<ProductAddComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductAddComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductAddComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
