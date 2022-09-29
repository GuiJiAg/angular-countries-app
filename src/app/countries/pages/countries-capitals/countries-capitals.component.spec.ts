import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesCapitalsComponent } from './countries-capitals.component';

describe('CountriesCapitalsComponent', () => {
  let component: CountriesCapitalsComponent;
  let fixture: ComponentFixture<CountriesCapitalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountriesCapitalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesCapitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
