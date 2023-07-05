import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  buttons: string[] = [
    '0',
    '.',
    '=',
    '+',
    '-',
    '*',
    '/',
    'Del',
    '7',
    '4',
    '1',
    '2',
    '3',
    '6',
    '9',
    '8',
    '5'
  ];
  calculation: string = '';
  result: string = '';
  calculated: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  clear() {
    this.result = '';
    this.calculation = '';
    this.calculated = false;
  }

  buttonClicked(label: string): void {
    if (this.calculated) {
      this.clear()
    }

    if (this.calculation.length === 0) {
      if (label === '/' || label === '*' || label === '+' || label === '-' || label === '=' || label ==='0') {
        return
      }
    }

    if (label === 'Del') {
      if (this.calculation.length > 0) {
        this.calculation = this.calculation.substring(0, this.calculation.length - 1);
      }
    } else if (label === '.') {
      const lastNumber = this.calculation.split(/[-+*/]/).pop();
      if (lastNumber) {
        if (lastNumber.includes('.')) {
          return;
        }
      }
      this.calculation += label;
    } else {
      if (label === '=') {
        if (this.calculation.endsWith('/') || this.calculation.endsWith('*') || this.calculation.endsWith('+') || this.calculation.endsWith('-')) {
          return;
        }
        this.calculate(this.calculation);
      } else {
        if ((this.calculation.endsWith('/') || this.calculation.endsWith('*') || this.calculation.endsWith('+') || this.calculation.endsWith('-')) && (label === '/' || label === '*' || label === '+' || label === '-')) {
          return;
        }
        this.calculation += label;
      }
    }
  }

  calculate(calculation: string): void {
    this.result = ('= ' + eval(calculation)).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    this.calculated = true;
  }
}
