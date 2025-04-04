import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuredProductsComponent } from './structured-products.component';

describe('StructuredProductsComponent', () => {
  let component: StructuredProductsComponent;
  let fixture: ComponentFixture<StructuredProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuredProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuredProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
