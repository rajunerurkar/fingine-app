import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutualFundGlossaryComponent } from './mutual-fund-glossary.component';

describe('MutualFundGlossaryComponent', () => {
  let component: MutualFundGlossaryComponent;
  let fixture: ComponentFixture<MutualFundGlossaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MutualFundGlossaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MutualFundGlossaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
