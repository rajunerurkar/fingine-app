import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceGlossaryComponent } from './insurance-glossary.component';

describe('InsuranceGlossaryComponent', () => {
  let component: InsuranceGlossaryComponent;
  let fixture: ComponentFixture<InsuranceGlossaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsuranceGlossaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsuranceGlossaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
