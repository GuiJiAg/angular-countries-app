import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesInputComponent } from './countries-input.component';

describe('CountriesInputComponent', () => {
  let component: CountriesInputComponent;
  let fixture: ComponentFixture<CountriesInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountriesInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
