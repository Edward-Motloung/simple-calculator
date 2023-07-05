import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a digit to the calculation', () => {
    component.buttonClicked('2');
    expect(component.calculation).toBe('2');
  });

  it('should handle multiple digits in the calculation', () => {
    component.buttonClicked('2');
    component.buttonClicked('0');
    component.buttonClicked('0');
    expect(component.calculation).toBe('200');
  });

  it('should handle the Del button', () => {
    component.buttonClicked('2');
    component.buttonClicked('0');
    component.buttonClicked('Del');
    expect(component.calculation).toBe('2');
  });

  it('should not allow operator as the first input', () => {
    component.buttonClicked('+');
    expect(component.calculation).toBe('');
  });

  it('should not allow consecutive operators', () => {
    component.buttonClicked('2');
    component.buttonClicked('+');
    component.buttonClicked('*');
    expect(component.calculation).toBe('2+');
  });

  it('should handle the = button', () => {
    component.buttonClicked('2');
    component.buttonClicked('+');
    component.buttonClicked('2');
    component.buttonClicked('=');
    expect(component.result).toBe('= 4');
  });

  it('should calculate the result for a complex expression', () => {
    component.buttonClicked('2');
    component.buttonClicked('0');
    component.buttonClicked('0');
    component.buttonClicked('+');
    component.buttonClicked('4');
    component.buttonClicked('/');
    component.buttonClicked('4');
    component.buttonClicked('*');
    component.buttonClicked('1');
    component.buttonClicked('0');
    component.buttonClicked('0');
    component.buttonClicked('=');
    expect(component.result).toBe('= 300');
  });

  it('should allow only one decimal point per number', () => {
    component.buttonClicked('2');
    component.buttonClicked('.');
    component.buttonClicked('5');
    component.buttonClicked('.');
    component.buttonClicked('7');
    component.buttonClicked('+');
    component.buttonClicked('3');
    component.buttonClicked('.');
    component.buttonClicked('1');
    component.buttonClicked('.');
    component.buttonClicked('8');
    component.buttonClicked('=');
    expect(component.calculation).toBe('2.57+3.18');
  });
});
