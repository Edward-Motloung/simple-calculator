import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() label: string = '';
  @Output() onClick: EventEmitter<any> = new EventEmitter()
  hasGradient: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if (this.label === '/' || this.label === '*' || this.label === '+' || this.label === '-' || this.label === '=') {
      this.hasGradient = true
    }
  }

  click(label: string): void {
    this.onClick.emit(label);
  }
}
